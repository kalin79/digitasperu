import ModuleVideo from './ModuleVideo.twig'
import theme from '@/config/storybook'
import { CaseStudy as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/Case Study/ModuleVideo',
  argTypes: {
    embed: {
      type: { name: 'string', required: true }
    },
    poster: {
      type: { name: 'object' },
    },
    background: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    ...theme.argTypes,
  },
  args: {
    background: false,
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  ModuleVideo(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QP60J_CZoI8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  poster: {
    image: {
      src: 'https://source.unsplash.com/random/1440x810',
      alt: '',
      width: 1440,
      height: 810
    }
  },
}

export const WithPosterVideo = Template.bind({})
WithPosterVideo.args = {
  ...Basic.args,
  poster: {
    ...Basic.args.poster,
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
  },
}
