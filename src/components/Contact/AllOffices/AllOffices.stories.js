import Template from './AllOffices.twig'
import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

import { OFFICES, REGIONS } from '@/data/offices.json'

export default {
  title: 'Components/Contact/All Offices',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: ['<b>4,000</b> Unicorns', '<b>54</b> Offices'],
  image: {
    src: 'https://source.unsplash.com/WMSvsWzhM0g/1304x560',
    alt: '',
    width: 1304,
    height: 560
  },
  regions: REGIONS.slice(1).map(region => (region.offices = OFFICES.filter(office => office.region.id === region.id), region)),
}
