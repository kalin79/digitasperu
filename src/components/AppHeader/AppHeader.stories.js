import AppHeader from './AppHeader.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

import BannerNewsTpl from '@Components/BannerNews/BannerNews.twig'
import * as BannerNewsStories from '@Components/BannerNews/BannerNews.stories'

export default {
  title: 'Components/AppHeader',
  argTypes: {
    dark: {
      name: 'dark',
      description: 'Default to primaryContrastColor ("" empty string value).',
      type: { name: 'boolean' },
      options: ["", 'false', 'true'],
      control: {
        type: 'inline-radio',
        labels : {
          '': 'Empty string',
          'false': false,
          'true': true
        }
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    menu: {
      name: 'menu',
      type: { name: 'object' },
    },
    cta: {
      name: 'cta',
      type: { name: 'object' }
    },
    homeLink: {
      name: 'homeLink',
      description: 'Homepage URL for brand logo link.',
      type: { name: 'string' },
    },
    pageTitle: {
      name: 'pageTitle',
      description: 'Title of the current page, to be displayed in fixed navbar on scroll down.',
      type: { name: 'string' },
    },
    withProgress: {
      name: 'withProgress',
      description: 'Show a progress bar with scroll progression.',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    ...theme.argTypes,
  },
  args: {
    dark: "",
    withProgress: false,
    ...theme.args,
    primaryColor: COLORS.purple.contrast,
    primaryContrastColor: 'white',
    secondaryColor: COLORS.orange.contrast,
  }
}

const BannerNews = BannerNewsTpl(BannerNewsStories.Basic.args)

const Template = ({ menu, ...args }, context) => AppHeader({
  ...args,
  menu: {
    ...menu,
    BannerNews,
    items: context.kind.includes('AppHeader')
      ? menu.items
      : menu.items.map(item => ({ ...item, current: item.link.includes(context.id) }))
  }
})

export const Default = Template.bind({})
Default.args = {
  menu: {
    items: [
      { title: 'Work', link: '/iframe.html?id=pages-work--work', current: true },
      { title: 'Expertise', link: '/iframe.html?id=pages-expertise--expertise' },
      { title: 'About', link: '/iframe.html?id=pages-about--about' },
      { title: 'Careers', link: '/iframe.html?id=pages-careers--careers' },
    ],
    cta: {
      label: 'Contact Us',
      link: '/iframe.html?id=pages-contact--contact'
    },
    BannerNews,
  },
  homeLink: '/iframe.html?id=pages-home--home',
  pageTitle: 'Let’s Connect',
}
Default.parameters = {
  backgrounds: { default: 'dark' }
}

export const Dark = Template.bind({})
Dark.args = {
  ...Default.args,
  dark: 'true'
}
Dark.parameters = {
  backgrounds: { default: 'dark' }
}

export const Light = Template.bind({})
Light.args = {
  ...Dark.args,
  dark: "false"
}
Light.parameters = {
  backgrounds: { default: 'light' }
}

export const ScrollBehavior = Template.bind({})
ScrollBehavior.args = {
  ...Dark.args,
  withProgress: true,
}
ScrollBehavior.parameters = {
  backgrounds: { default: 'dark' }
}
ScrollBehavior.decorators = [
  (Story) => `<div style="height:300vh">${Story()}</div>`
]
