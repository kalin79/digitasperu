import HeroJob from './HeroJob.twig'
import theme from '@/config/storybook'
import { Job as page } from '@/config/pages'

import AppBackground from '@Components/AppBackground/AppBackground.twig'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'

const date = '2021-05-14 12:00:00'

export default {
  title: 'Components/Job/HeroJob',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
    },
    city: {
      name: 'city',
      type: { name: 'string' },
    },
    date: {
      name: 'date',
      type: { name: 'string', required: true },
      control: { type: 'date' }
    },
    jobId: {
      name: 'jobId',
      type: { name: 'string' },
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
  HeroJob({
    ...args,
    date: new Date(date),
  }),
  AppBackground(AppBackgroundStories.Basic.args)
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Business Intelligence <br>& Analytics Lead',
  city: 'Boston',
  date,
  jobId: 'NA-20-3141',
}
