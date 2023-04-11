import Template from './Chip.twig'

export default {
  title: 'Symbols/Chip',
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
    },
    tag: {
      name: 'tag',
      options: ['span', 'a', 'button'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'span' }
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
    dismiss: {
      name: 'dismiss',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    tag: 'span',
    label: 'Connected Campaigns',
    outline: false,
    dismiss: false,
  }
}

export const Basic = Template.bind({})
Basic.args = {}

export const WithLink = Template.bind({})
WithLink.args = {
  ...Basic.args,
  tag: 'a',
  attr: 'href="#connected-campaigns"'
}

export const WithRemoveIcon = Template.bind({})
WithRemoveIcon.args = {
  ...Basic.args,
  tag: 'button',
  dismiss: true
}

export const Outline = Template.bind({})
Outline.args = {
  ...Basic.args,
  outline: true
}
Outline.parameters = {
  backgrounds: { default: 'light' }
}
