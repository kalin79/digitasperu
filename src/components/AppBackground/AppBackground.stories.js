import Template from './AppBackground.twig'
import theme from '@/config/storybook'
import { Insight as page } from '@/config/pages'

import ColorGradientStories from '@Components/ColorGradient/ColorGradient.stories'

export default {
  title: 'Components/AppBackground',
  parameters: {
    controls: { exclude: ['autoplay'] },
  },
  argTypes: {
    ...ColorGradientStories.argTypes,
    ...theme.argTypes,
  },
  args: {
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {}

export const Gradient = Template.bind({})
Gradient.args = {
  gradient: true,
  autoplay: true
}
