import Template from './ModuleText.twig'
import theme from '@/config/storybook'

export default {
  title: 'Components/Case Study/ModuleText',
  argTypes: {
    title: {
      type: { name: 'string' }
    },
    content: {
      type: { name: 'string', required: true }
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
    background: 'none',
    ...theme.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  content: `<p>The current tire buying process isn’t fast, easy, or convenient enough for millennial women. We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam tortor, ullamcorper ac vehicula ut, faucibus non ligula. Etiam congue facilisis odio. Nulla at urna et orci egestas accumsan quis vel lectus. Suspendisse iaculis, orci nec congue posuere, sapien odio tempor dui, ut malesuada lacus lectus a velit. Morbi commodo justo nunc, et feugiat elit tincidunt eget. Donec et faucibus augue. Sed eros enim, dapibus eu nisl nec, eleifend efficitur nisl.</p>`,
}

export const NoTitle = Template.bind({})
NoTitle.args = {
  ...Basic.args,
  title: '',
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  ...Basic.args,
  background: 'muted',
}
