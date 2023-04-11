import Template from './ModuleTwoImages.twig'

export default {
  title: 'Components/Case Study/ModuleTwoImages',
  argTypes: {
    medias: {
      type: { name: 'array', required: true }
    }
  },
}

export const Basic = Template.bind({})
Basic.args = {
  medias: [
    {
      image: {
        src: 'https://source.unsplash.com/random/1288x892?sig=0',
        alt: '',
        width: 1288,
        height: 892
      },
      video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4',
    },
    {
      image: {
        src: 'https://source.unsplash.com/random/1280x720?sig=1',
        alt: '',
        width: 1280,
        height: 720
      },
    },
  ]
}
