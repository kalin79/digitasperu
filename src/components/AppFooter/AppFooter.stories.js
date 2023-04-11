import AppFooter from './AppFooter.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

import FooterContactTpl from '@Components/FooterContact/FooterContact.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import * as FooterContactStories from '@Components/FooterContact/FooterContact.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'

export default {
  title: 'Components/AppFooter',
  ...theme,
  parameters: {
    controls: { exclude: ['FooterContact'] },
  },
  args: {
    ...theme.args,
    primaryColor: COLORS.purple.contrast,
    primaryContrastColor: 'white',
    secondaryColor: COLORS.pink.contrast,
  }
}

const FooterContact = FooterContactTpl(FooterContactStories.Basic.args)

const Template = ({ gradient, ...args }) => [
  AppFooter({
    ...args,
    FooterContact
  }),
  AppBackground({ ...AppBackgroundStories.Gradient.args, gradient })
].join('')

export const Basic = Template.bind({})
Basic.args = {
  FooterContact,
  menu: {
    items: [
      { title: 'Work', link: '/iframe.html?id=pages-work--work' },
      { title: 'Expertise', link: '/iframe.html?id=pages-expertise--expertise' },
      { title: 'About', link: '/iframe.html?id=pages-about--about' },
      { title: 'Careers', link: '/iframe.html?id=pages-careers--careers' },
    ]
  },
  socials: {
    menu_name: 'Follow us',
    items: [
      { title: 'LinkedIn', link: 'https://www.linkedin.com/company/digitas-north-america' },
      { title: 'Twitter', link: 'https://twitter.com/digitas' },
      { title: 'Instagram', link: 'https://www.instagram.com/digitas.na/' },
    ]
  }
}

export const Gradient = Template.bind({})
Gradient.args = {
  ...Basic.args,
  gradient: true,
  primaryColor: COLORS.red.contrast,
  secondaryColor: COLORS.pink.contrast,
}
