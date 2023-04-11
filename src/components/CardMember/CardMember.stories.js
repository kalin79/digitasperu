import Template from './CardMember.twig'

export default {
  title: 'Symbols/CardMember',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: true }
    },
    title: {
      name: 'title',
      type: { name: 'string' }
    },
    thumbnail: {
      name: 'thumbnail',
      type: { name: 'object' }
    },
  }
}

export const Basic = Template.bind({})
Basic.args = {
  name: 'Michelle Tang',
  title: 'Chief Marketing Officer',
  thumbnail: {
    src: 'https://source.unsplash.com/S3GrMiUhpNU/450x640',
    alt: '',
    width: 450,
    height: 640
  },
}
