import Template from './UsOffices.twig'
import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

import { OFFICES, REGIONS } from '@/data/offices.json'

export default {
  title: 'Components/Contact/US Offices',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Welcome to our world',
  offices: OFFICES.filter(office => office.region.id === REGIONS[0].id),
}
