import Template from './AudioPlayer.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

export default {
  title: 'Symbols/AudioPlayer',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    src: {
      name: 'src',
      type: { name: 'string', required: true }
    },
    ...theme.argTypes,
  },
  args: {
    ...theme.args,
    primaryColor: COLORS.red.contrast,
    primaryColorContrast: 'white',
    secondaryColor: COLORS.red.light,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  src: '/assets/audio/sample.mp3',
}
