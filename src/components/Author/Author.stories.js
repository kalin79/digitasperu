// import './Author.css'
import Template from './Author.twig'

export default {
  title: 'Symbols/Author',
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
    avatar: {
      name: 'avatar',
      type: { name: 'object' }
    },
    link: {
      name: 'link',
      type: { name: 'string' }
    },
  }
}

export const Basic = Template.bind({})
Basic.args = {
  name: 'Robert Fox',
  title: 'Director Of Research & Innovation',
  avatar: {
    src: 'https://i.pravatar.cc/120',
    alt: '',
    width: 120,
    height: 120
  }
}

export const WithLink = Template.bind({})
WithLink.args = {
  ...Basic.args,
  link: '#robert-fox'
}

export const NoAvatar = Template.bind({})
NoAvatar.args = {
  ...Basic.args,
  avatar: null
}
