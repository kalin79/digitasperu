const REGIONS = [
  { id: 'north-america', title: 'North America' },
  { id: 'asia-pacific', title: 'Asia-Pacific' },
  { id: 'europe', title: 'Europe' },
  { id: 'latin-america', title: 'Latin America' },
  { id: 'middle-east-africa', title: 'Middle East & Africa' },
]

const northAmerica = [
  {
    title: 'Atlanta',
    // link: '/iframe.html?id=pages-office--office',
    address: '384 Northyards Blvd NW <br>Suite 480<br>Atlanta, GA 30313<br>United States',
    phone: '+1 404-460-1010',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
  {
    title: 'Boston',
    // link: '/iframe.html?id=pages-office--office',
    address: '40 Water Street<br>Boston, MA 02109<br>United States',
    phone: '+1 617-867-1000',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
  {
    title: 'Chicago',
    // link: '/iframe.html?id=pages-office--office',
    address: '35 West Wacker Drive<br>15th Floor<br>Chicago, IL 60601<br>United States',
    phone: '+1 312-729-0100',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
  {
    title: 'Detroit',
    // link: '/iframe.html?id=pages-office--office',
    address: '150 W. Jefferson<br>4th Floor<br>Detroit, MI 48226<br>United States',
    phone: '+1 313-394-2800',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
  {
    title: 'Los Angeles',
    // link: '/iframe.html?id=pages-office--office',
    address: '3211 Olympic Blvd, Santa Monica<br>Los Angeles, CA 90404<br>United States',
    phone: '+1 310-264-6900',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
  {
    title: 'San Francisco',
    // link: '/iframe.html?id=pages-office--office',
    address: '375 Hudson Street<br>16th Floor<br>New York, NY 10014<br>United States',
    phone: '+1 212-610-5000',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
  {
    title: 'New York',
    // link: '/iframe.html?id=pages-office--office',
    address: '350 Bush Street<br>San Francisco, CA 94104<br>United States',
    phone: '+1 415-293-2001',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
  {
    title: 'Seattle',
    // link: '/iframe.html?id=pages-office--office',
    address: '424 2nd Ave W,<br>Seattle, WA 98199<br>United States',
    phone: '(206) 285-2222',
    email: 'newbusiness@digitas.com',
    image: {
      src: `https://source.unsplash.com/collection/2343206/512x640?sig=${(Math.floor(Math.random()*5041874871))}`,
      alt: '',
      width: 512,
      height: 640
    },
    region: { ...REGIONS[0] },
  },
]

const asiaPacific = [
  {
    title: 'Ahmedabad',
    link: '/iframe.html?id=pages-office--office',
    address: 'Sun Square 12th Floor<br>Unit No.: 1201 to 1209<br>Near Klassic Gold Hotel, Off C. G. Road<br>Ahmedabad 380009<br>India',
    phone: '+91 79 49066400',
    email: 'ininfo@digitas.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/digitasin/',
      twitter: 'https://twitter.com/Digitas_in',
      facebook: 'https://www.facebook.com/DigitasIN/?fref=ts',
      instagram: 'https://www.instagram.com/Digitas_india/?hl=en',
    },
    region: { ...REGIONS[1] },
  },
  {
    title: 'Auckland',
    link: '/iframe.html?id=pages-office--office',
    address: '25 College Hill<br>Freemans Bay<br>Auckland 1011<br>New Zealand',
    phone: '09-369 7700',
    email: 'auckland@digitas.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/affinity-id/',
      facebook: 'https://www.facebook.com/AffinityID/',
    },
    region: { ...REGIONS[1] },
  },
  {
    title: 'Bangkok',
    link: '/iframe.html?id=pages-office--office',
    address: 'Sindhorn Tower 1, 130-132 Wireless Rd<br>Patumwan<br>Thailand',
    phone: '+66 2684 5555',
    email: 'auckland@digitas.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/digitas-th/',
      facebook: 'https://www.facebook.com/digitasthailand/',
      instagram: 'https://www.instagram.com/digitas.th/',
    },
    region: { ...REGIONS[1] },
  },
]

const europe = [
  {
    title: 'Amsterdam',
    link: '/iframe.html?id=pages-office--office',
    address: 'Joop Geesinkweg 209<br>1114 AB Amsterdam<br>Netherlands',
    phone: '+31 20 406 12 00',
    email: 'amsterdam@digitas.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/164768/',
      twitter: 'https://twitter.com/Digitas_NL',
      facebook: 'https://www.facebook.com/Digitas.Amsterdam/',
    },
    region: { ...REGIONS[2] },
  },
  {
    title: 'Athens',
    link: '/iframe.html?id=pages-office--office',
    address: '1-3 Tzavella Street<br>15231 Athens<br>Greece',
    phone: '+30 210 6281000',
    email: 'greece@digitas.com',
    socials: {
      facebook: 'https://www.facebook.com/publicis.gr',
      instagram: 'https://www.instagram.com/publicisgroupegreece/',
    },
    region: { ...REGIONS[2] },
  },
  {
    title: 'Berlin',
    link: '/iframe.html?id=pages-office--office',
    address: 'Leibnizstraße 65<br>10629 Berlin<br>Germany',
    phone: '+49 30 5058-0',
    email: 'info@digitaspixelpark.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/digitaspixelpark',
      twitter: 'https://twitter.com/digitaspxp',
      facebook: 'https://www.facebook.com/digitaspixelpark/',
      instagram: 'https://www.instagram.com/digitaspixelpark/',
    },
    region: { ...REGIONS[2] },
  },
]

const latinAmerica = [
  {
    title: 'Bogotá',
    link: '/iframe.html?id=pages-office--office',
    address: 'Carrera 13 # 89 – 59<br>Bogota<br>Colombia',
    phone: '+573182304117 / +5717425959',
    email: 'bogota@digitas.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/digitas-colombia/',
      facebook: 'https://www.facebook.com/DigitasColombia',
    },
    region: { ...REGIONS[3] },
  },
  {
    title: 'Buenos Aires',
    link: '/iframe.html?id=pages-office--office',
    address: 'Mariscal Antonio Jose de Sucre 865<br>Buenos Aires<br>Argentina',
    phone: '+54 11 4789-5000',
    email: 'argentina@digitas.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/digitas-argentina/',
      instagram: 'https://www.instagram.com/digitas.ar/',
    },
    region: { ...REGIONS[3] },
  },
  {
    title: 'Guatemala City',
    link: '/iframe.html?id=pages-office--office',
    address: '5ta ave 5-55, Zona 14<br>Edificio Europlaza, Torre 2, Nivel 3, Oficina 304<br>Guatemala City 01014<br>Guatemala',
    phone: '+502 2229 3500',
    email: 'guatemala@digitas.com',
    socials: {
      linkedin: 'https://gt.linkedin.com/company/digitas-guatemala?trk=public_profile_topcard_current_company',
      facebook: 'https://www.facebook.com/DigitasGuatemala',
      instagram: 'https://www.instagram.com/digitas_guatemala',
    },
    region: { ...REGIONS[3] },
  },
]

const middleEastAfrica = [
  {
    title: 'Cape Town',
    link: '/iframe.html?id=pages-office--office',
    address: 'Digitas Liquorice, The Harrington, 50 Harrington Street, Zonnebloem<br>Cape Town 8001<br>South Africa',
    phone: '+27 87 255 0900',
    email: 'info@liquorice.co.za',
    socials: {
      linkedin: 'https://za.linkedin.com/company/digitasliquorice',
      twitter: 'https://twitter.com/liquoriceonline',
      facebook: 'https://www.facebook.com/DigitasLiquorice',
      instagram: 'https://www.instagram.com/digitasliquorice/',
    },
    region: { ...REGIONS[4] },
  },
  {
    title: 'Dubai',
    link: '/iframe.html?id=pages-office--office',
    address: 'Dubai Properties HQ Building<br>Zone BC<br>Knowledge Village<br>Dubai PO Box 7534<br>United Arab Emirates',
    phone: '+ 971 4 367 6400',
    email: 'dubai@digitas.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/lbi-mena?trk=company_logo',
      twitter: 'https://twitter.com/Digitas_Dubai',
      facebook: 'https://www.facebook.com/DigitasDubai/',
      instagram: 'https://www.instagram.com/digitas_dubai/',
    },
    region: { ...REGIONS[4] },
  },
  {
    title: 'Durban',
    link: '/iframe.html?id=pages-office--office',
    address: 'Digitas Liquorice, 7 Rydall Vale Crescent<br>Douglas Saunders Drive<br>La Lucia Ridge Estate<br>4019 Durban<br>South Africa',
    phone: '+27 315661266',
    email: 'info@liquorice.co.za',
    socials: {
      linkedin: 'https://za.linkedin.com/company/digitasliquorice',
      twitter: 'https://twitter.com/liquoriceonline',
      facebook: 'https://www.facebook.com/DigitasLiquorice',
      instagram: 'https://www.instagram.com/digitasliquorice/',
    },
    region: { ...REGIONS[4] },
  },
]

const OFFICES = [
  ...northAmerica,
  ...asiaPacific,
  ...europe,
  ...latinAmerica,
  ...middleEastAfrica,
]

export {
  OFFICES as default,
  OFFICES,
  REGIONS,
}
