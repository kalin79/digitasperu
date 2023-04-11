import Template from './ModuleTextImages.twig'

export default {
  title: 'Components/Case Study/ModuleTextImages',
  argTypes: {
    title: {
      type: { name: 'string' }
    },
    content: {
      type: { name: 'string', required: true }
    },
    medias: {
      type: { name: 'array', required: true }
    }
  },
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Etiam congue facilisis odio',
  content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam tortor, ullamcorper ac vehicula ut, faucibus non ligula. Etiam congue facilisis odio.</p>',
  medias: [
    {
      image: {
        src: 'https://source.unsplash.com/random/1200x1324?sig=0',
        alt: '',
        width: 1200,
        height: 1324
      },
    },
    {
      image: {
        src: 'https://source.unsplash.com/random/1200x1324?sig=1',
        alt: '',
        width: 1200,
        height: 1324
      },
      video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4',
    },
  ]
}

export const OneImage = Template.bind({})
OneImage.args = {
  ...Basic.args,
  medias: Basic.args.medias.slice(0, 1),
}
