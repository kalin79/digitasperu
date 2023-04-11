import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { Loader } from '@googlemaps/js-api-loader'
import styles from './map-styles'
import './OfficeDetails.css'

const OfficeDetails = (settings = {}) => ({
  // props
  address: '',
  location: '',
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
  // data
  map: null,
  google: null,

  ...settings,

  // mounted
  init () {
    this.$watch('location', (location) => {
      this.map && this.map.setCenter(location)
    })

    const loader = new Loader({
      apiKey: this.apiKey,
      version: 'weekly',
    })

    const mapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 14,
      styles,
      backgroundColor: gsap.getProperty(this.$refs.map, 'backgroundColor'),
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      controlSize: this.$isDesktop ? 20 : 0,
    }

    if (this.location) {
      mapOptions.center = this.location
    }

    loader.load().then((google) => {
      this.google = google
      this.map = new google.maps.Map(this.$refs.map, mapOptions)

      if (!this.location && this.address) {
        // try to retrieve location from address
        const geocoder = new google.maps.Geocoder()
        // cleanup address for request
        const address = this.address.replace(/<\s*\/?br\s*[\/]?>/gi, ', ')

        geocoder
          .geocode({ address })
          .then(({ results }) => {
            if (results[0]) {
              this.location = results[0].geometry.location
              // display a custom marker on address location
              this.addMarker()
            }
          })
      } else if (this.location) {
        this.addMarker()
      }
    })
  },
  addMarker () {
    if (!this.map) {
      return
    }

    // display a custom marker on address location
    const marker = new this.google.maps.Marker({
      position: this.location,
      icon: `${process.env.ASSET_PATH}assets/svg/map-marker.svg`,
    })
    marker.setMap(this.map)
  }
})

Alpine.data('OfficeDetails', OfficeDetails)
