import Template from './ModuleImage.twig'
import theme from '@/config/storybook'
import { CaseStudy as page } from '@/config/pages'

export default {
  title: 'Components/Case Study/ModuleImage',
  argTypes: {
    image: {
      type: { name: 'object' },
    },
    video: {
      type: { name: 'string' },
    },
    background: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    primaryColor: {
      ...theme.argTypes.primaryColor
    }
  },
  args: {
    video: '',
    background: false,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  image: {
    src: 'https://source.unsplash.com/random/1304x736',
    alt: '',
    width: 1304,
    height: 736
  }
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  ...Basic.args,
  background: true
}

export const WithVideo = Template.bind({})
WithVideo.args = {
  ...Basic.args,
  video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
}
