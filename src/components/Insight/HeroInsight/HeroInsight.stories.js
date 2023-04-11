import HeroInsight from './HeroInsight.twig'
import theme from '@/config/storybook'
import { Insight as page } from '@/config/pages'

import AppBackground from '@Components/AppBackground/AppBackground.twig'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'

import { AUTHORS } from '@/data/insights.json'

const date = '2021-05-14 12:00:00'

export default {
  title: 'Components/Insight/HeroInsight',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
    },
    authors: {
      name: 'authors',
      type: { name: 'array' },
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

const Template = ({ date, ...args }) => [
  HeroInsight({
    ...args,
    date: new Date(date),
  }),
  AppBackground(AppBackgroundStories.Basic.args)
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'How to Adapt Your Social Strategy to Unpredictable Times',
  authors: [
    AUTHORS[1],
    AUTHORS[2],
  ],
  date,
}
