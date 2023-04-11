import HeroNews from './HeroNews.twig'
import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

const date = '2021-03-24 12:00:00'

export default {
  title: 'Components/Pressroom/HeroNews',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
    },
    date: {
      name: 'date',
      type: { name: 'string', required: true },
      control: { type: 'date' }
    },
    ...theme.argTypes,
  },
  args: {
    date,
    ...theme.args,
    ...page.args,
  }
}

const Template = ({ date, ...args }) => HeroNews({
  ...args,
  date: new Date(date),
})

export const Basic = Template.bind({})
Basic.args = {
  title: 'Digitas Named a Leader Again in the 2021 Gartner Magic Quadrant for Global Marketing Agencies',
  date,
}
