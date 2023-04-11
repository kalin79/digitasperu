import Template from './InsightFooter.twig'
import theme from '@/config/storybook'
import { Insight as page } from '@/config/pages'

import { AUTHORS } from '@/data/insights.json'

export default {
  title: 'Components/Insight/InsightFooter',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  authors: [
    AUTHORS[1],
    AUTHORS[2],
  ],
}
