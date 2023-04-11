import Template from './Image.twig'

export default {
  title: 'Symbols/Image',
  argTypes: {
    src: {
      name: 'src',
      type: { name: 'string', required: true },
    },
    alt: {
      name: 'alt',
      type: { name: 'string', required: true },
    },
    width: {
      name: 'width',
      type: { name: 'number' },
    },
    height: {
      name: 'height',
      type: { name: 'number' },
    },
    srcset: {
      name: 'srcset',
      type: { name: 'string' },
    },
    sizes: {
      name: 'sizes',
      type: { name: 'string' },
    },
  }
}

export const Basic = Template.bind({})
Basic.args = {
  src: 'https://source.unsplash.com/random/1600x900',
  alt: '',
  width: 1600,
  height: 900,
  srcset: 'https://source.unsplash.com/random/768x432 768w, https://source.unsplash.com/random/1600x900 1600w',
  sizes: '100vw'
}
