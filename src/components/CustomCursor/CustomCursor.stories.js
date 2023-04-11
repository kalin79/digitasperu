import CustomCursor from './CustomCursor.twig'
import COLORS from '@/config/colors'

export default {
  title: 'Components/CustomCursor',
  argTypes: {
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Default to primaryColor',
      type: { name: 'string' },
      control: { type: 'color' },
      table: {
        type: { summary: 'string' }
      }
    },
    iconColor: {
      name: 'iconColor',
      description: 'Default to primaryColorContrast',
      options: ['black', 'white'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' }
      }
    },
    icon: {
      name: 'icon',
      options: ['arrow', 'close', 'move', 'play', 'refresh', 'label'],
      control: { type: 'select' }
    },
    label: {
      name: 'label',
      type: { name: 'string' },
    },
    withProgress: {
      name: 'withProgress',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    progress: {
      name: 'progress',
      type: 'number',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    }
  },
  args: {
    icon: 'move',
    label: 'view',
    backgroundColor: COLORS.purple.contrast,
    iconColor: 'white',
    progress: 0,
  }
}

const Template = args => CustomCursor({ settings: args })

export const Basic = Template.bind({})
Basic.args = {
  icon: 'move'
}

export const WithProgress = Template.bind({})
WithProgress.args = {
  icon: 'refresh',
  withProgress: true,
  progress: 0.3,
}

export const WithText = Template.bind({})
WithText.args = {
  icon: 'label',
  label: 'view'
}
