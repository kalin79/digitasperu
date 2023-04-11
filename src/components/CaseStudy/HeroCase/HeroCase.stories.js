import Template from './HeroCase.twig'

export default {
  title: 'Components/Case Study/HeroCase',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
    },
    eyebrow: {
      name: 'eyebrow',
      description: 'Displayed above the title. Optional.'
    }
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Kalin By Goodyear',
  eyebrow: 'Goodyear',
  image: {
    src: 'https://source.unsplash.com/random/1600x900?id=hero',
    alt: '',
    width: 1600,
    height: 900
  },
}

export const WithVideo = Template.bind({})
WithVideo.args = {
  ...Basic.args,
  video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4',
}
