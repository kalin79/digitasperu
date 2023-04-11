import Template from './CardProject.twig'

export default {
  title: 'Symbols/CardProject',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true }
    },
    excerpt: {
      name: 'excerpt',
      type: { name: 'string' }
    },
    link: {
      name: 'link',
      type: { name: 'string' }
    },
    thumbnail: {
      name: 'thumbnail',
      type: { name: 'object' }
    },
    tags: {
      name: 'tags',
      type: { name: 'array' }
    },
    color: {
      name: 'color',
      type: { name: 'string' },
      control: { type: 'color' }
    },
    contrastColor: {
      name: 'contrastColor',
      options: ['black', 'white'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' }
      }
    }
  },
  args: {
    contrastColor: 'black'
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'JFK Moonshot',
  excerpt: 'An AR re-creation of the Apollo 11 mission.',
  thumbnail: {
    src: 'https://source.unsplash.com/random/1288x1376',
    alt: '',
    width: 1288,
    height: 1376
  },
  tags: [
    { title: 'Brand activation', link: '#brand-activation' },
    { title: 'Marketing', link: '#marketing' },
    { title: 'Social media', link: '#social-media' },
  ],
  color: '#FE9F00',
}

export const WithLink = Template.bind({})
WithLink.args = {
  ...Basic.args,
  link: '#jfk-moonshot'
}
