import Template from './ModuleImageFull.twig'

export default {
  title: 'Components/Case Study/ModuleImageFull',
  argTypes: {
    image: {
      type: { name: 'object', required: true },
    }
  }
}

export const Basic = Template.bind({})
Basic.args = {
  image: {
    src: 'https://source.unsplash.com/random/1600x900',
    alt: '',
    width: 1600,
    height: 900
  }
}

export const WithVideo = Template.bind({})
WithVideo.args = {
  ...Basic.args,
  video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4',
}
