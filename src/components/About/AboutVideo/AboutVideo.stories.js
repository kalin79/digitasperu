import AboutVideo from './AboutVideo.twig'
import theme from '@/config/storybook'
import { About as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/About/AboutVideo',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  AboutVideo(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  video: {
    src: '/assets/video/placeholder_video.mp4',
    type: 'video/mp4',
    poster: {
      src: 'https://source.unsplash.com/random/1440x810',
      alt: '',
      width: 1440,
      height: 810
    },
  }
}
