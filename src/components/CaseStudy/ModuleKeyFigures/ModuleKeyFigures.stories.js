import Template from './ModuleKeyFigures.twig'
import theme from '@/config/storybook'

export default {
  title: 'Components/Case Study/ModuleKeyFigures',
  argTypes: {
    eyebrow: {
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Impact' }
      }
    },
    items: {
      type: { name: 'array', required: true }
    },
    background: {
      options: ['none', 'primary', 'muted'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' }
      }
    },
    ...theme.argTypes,
  },
  args: {
    eyebrow: 'Impact',
    background: 'muted',
    ...theme.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  eyebrow: 'Impact',
  items: [
    {
      title: '+14%',
      content: '<p>Nulla at urna et orci egestas accumsan quis vel lectus. Suspendisse iaculis, orci nec congue posuere, sapien odio tempor dui, ut malesuada lacus lectus a velit.</p>'
    },
    {
      title: '$60M',
      content: '<p>Nulla at urna et orci egestas accumsan quis vel lectus. Suspendisse iaculis, orci nec congue posuere, sapien odio tempor dui, ut malesuada lacus lectus a velit.</p>'
    },
    {
      title: '200,000',
      content: '<p>Nulla at urna et orci egestas accumsan quis vel lectus. Suspendisse iaculis, orci nec congue posuere, sapien odio tempor dui, ut malesuada lacus lectus a velit.</p>'
    },
    {
      title: '4,5/5',
      content: '<p>Nulla at urna et orci egestas accumsan quis vel lectus. Suspendisse iaculis, orci nec congue posuere, sapien odio tempor dui, ut malesuada lacus lectus a velit.</p>'
    },
  ],
  background: 'muted',
}
