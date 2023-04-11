import HeroTitle from './HeroTitle.twig'
import theme from '@/config/storybook'
import { Expertise as page } from '@/config/pages'

import AppBackground from '@Components/AppBackground/AppBackground.twig'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'

export default {
  title: 'Components/HeroTitle',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
    },
    desc: {
      name: 'desc',
      type: { name: 'string', required: false },
    },
    ...theme.argTypes,
  },
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  HeroTitle(args),
  AppBackground(AppBackgroundStories.Gradient.args)
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'True unicorns are bold, curious, open, and very hard to find.',
}

export const WithDesc = Template.bind({})
WithDesc.args = {
  title: 'Connect Your Brand<br/>With People and Possibilities',
  desc: '<p>Creative | Design | Strategy | Data&nbsp;&amp;&nbsp;Analytics | Media | Technology</p>',
}
