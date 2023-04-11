import Template from './RoundButton.twig'

export default {
  title: 'Symbols/RoundButton',
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'string', required: true },
      options: ['search', 'close'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      }
    },
    label: {
      type: { name: 'string', required: true }
    },
    invert: {
      name: 'invert',
      description: 'Invert colors',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    outline: {
      name: 'outline',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    invert: false,
    outline: false
  }
}

export const Basic = Template.bind({})
Basic.args = {
  icon: 'search',
  label: 'Toggle search'
}

export const Invert = Template.bind({})
Invert.args = {
  ...Basic.args,
  invert: true
}
Invert.parameters = {
  backgrounds: { default: 'light' }
}

export const Outline = Template.bind({})
Outline.args = {
  ...Basic.args,
  outline: true
}
Outline.parameters = {
  backgrounds: { default: 'light' }
}
