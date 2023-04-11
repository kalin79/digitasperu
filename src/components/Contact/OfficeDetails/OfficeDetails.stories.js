import Template from './OfficeDetails.twig'

import OFFICES from '@/data/offices.json'

export default {
  title: 'Components/Contact/Office Details',
}

const { title, address, phone, email, image } = OFFICES[2]

export const Basic = Template.bind({})
Basic.args = {
  title,
  address,
  phone,
  email,
  image,
  location: { lat: 41.8787519, lng: -87.6416864 }, // Optional. Google Maps will use Geocoding service to find coordinates (if service is enabled)
}
