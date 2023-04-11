import Template from './Icon.twig'

export default {
  title: 'Symbols/Icon',
  parameters: {
    layout: 'centered',
    controls: { exclude: ['path'] },
  },
  argTypes: {
    icon: {
      type: { name: 'string', required: true },
      options: ['search', 'arrow-small', 'burger'],
      control: { type: 'select' }
    }
  }
}

export const Basic = Template.bind({})
Basic.args = {
  icon: 'search'
}
