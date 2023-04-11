import Template from './VideoPlayer.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

export default {
  title: 'Symbols/VideoPlayer',
  argTypes: {
    src: {
      name: 'src',
      type: { name: 'string', required: true },
    },
    poster: {
      name: 'poster',
      type: { name: 'object' },
    },
    ...theme.argTypes,
  },
  args: {
    ...theme.args,
    primaryColor: COLORS.orange.contrast,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  src: '/assets/video/placeholder_video.mp4',
  poster: {
    src: 'https://source.unsplash.com/random/1280x720',
    alt: '',
    width: 1280,
    height: 720
  },
}
