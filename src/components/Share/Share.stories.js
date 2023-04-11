import Template from './Share.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

export default {
  title: 'Symbols/Share',
  parameters: {
    layout: 'centered',
  },
  ...theme,
  args: {
    ...theme.args,
    primaryColor: COLORS.purple.contrast,
    primaryContrastColor: 'white',
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Share',
  shareUrl: 'https://www.digitas.com/en-us/',
  shareText: 'We are The Connected Marketing Agency',
}
