import Template from './InsightContent.twig'
import theme from '@/config/storybook'
import { Insight as page } from '@/config/pages'

export default {
  title: 'Components/Insight/InsightContent',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  tags: [
    { title: 'Social Marketing' },
    { title: 'Brand Content' },
  ],
  audio: '/assets/audio/sample.mp3',
}
