import Template from './FooterContact.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

export default {
  title: 'Symbols/FooterContact',
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  ...theme,
  args: {
    ...theme.args,
    primaryColor: COLORS.purple.contrast,
    primaryContrastColor: 'white',
    secondaryColor: COLORS.pink.contrast,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Make a Connection',
  contacts: [
    {
      type: 'New Business',
      person: {
        name: 'Michelle Tang',
        title: 'Chief Marketing Officer'
      },
      email: 'michelletang@digitas.com'
    },
    {
      type: 'Media Inquiries',
      person: {
        name: 'Willa Robertson',
        title: 'Corporate Communications'
      },
      email: 'willa.robertson@digitas.com'
    },
  ]
}
