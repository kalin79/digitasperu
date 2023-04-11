import Template from './ModuleTestimonial.twig'
import theme from '@/config/storybook'
import { CaseStudy as page } from '@/config/pages'

export default {
  title: 'Components/Case Study/ModuleTestimonial',
  argTypes: {
    eyebrow: {
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Testimonial' }
      }
    },
    quote: {
      type: { name: 'string', required: true },
    },
    author: {
      type: { name: 'object' }
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
    eyebrow: 'Testimonial',
    background: 'none',
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  eyebrow: 'Your “aha” moment ?',
  quote: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan orci ornare, commodo erat sed, semper turpis. Phasellus quis odio.</p>',
  author: {
    name: 'Robert Fox',
    title: 'DIRECTOR OF RESEARCH & INNOVATION',
    avatar: {
      src: 'https://i.pravatar.cc/120',
      alt: '',
      width: 120,
      height: 120
    }
  },
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  ...Basic.args,
  background: 'primary',
}
