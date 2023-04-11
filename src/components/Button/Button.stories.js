import Template from './Button.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

export default {
  title: 'Symbols/Button',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: {
      type: { name: 'string', required: true }
    },
    size: {
      name: 'size',
      options: ['small', 'normal'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' }
      }
    },
    icon: {
      name: 'icon',
      options: ['arrow-small', 'refresh-small'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'arrow-small' }
      }
    },
    style: {
      name: 'style',
      options: ['solid', 'link'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    ...theme.argTypes,
  },
  args: {
    label: 'Button',
    size: 'normal',
    icon: 'arrow-small',
    ...theme.args,
    primaryColor: COLORS.purple.contrast,
    primaryContrastColor: 'white',
    secondaryColor: COLORS.pink.contrast,
  }
}

export const Basic = Template.bind({})

export const NoIcon = Template.bind({})
NoIcon.args = {
  icon: false
}

export const Small = Template.bind({})
Small.args = {
  ...NoIcon.args,
  size: 'small'
}

export const Solid = Template.bind({})
Solid.args = {
  ...Small.args,
  style: 'solid'
}

export const AsLink = Template.bind({})
AsLink.args = {
  ...Basic.args,
  style: 'link'
}
