import Template from './Video.twig'

export default {
  title: 'Symbols/Video',
  argTypes: {
    src: {
      name: 'src',
      type: { name: 'string', required: true },
    },
    poster: {
      name: 'poster',
      description: 'Image URL.',
      type: { name: 'string' },
    },
    width: {
      name: 'width',
      type: { name: 'number' },
    },
    height: {
      name: 'height',
      type: { name: 'number' },
    },
    attr: {
      name: 'attr',
      description: 'You can add additional attributes if necessary.',
      type: { name: 'string' },
    }
  }
}

export const Basic = Template.bind({})
Basic.args = {
  src: '/assets/video/placeholder_video.mp4',
  attr: 'controls'
}
