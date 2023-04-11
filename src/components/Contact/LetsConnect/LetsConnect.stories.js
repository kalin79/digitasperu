import Template from './LetsConnect.twig'
import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

export default {
  title: 'Components/Contact/Let’s Connect',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Let’s connect',
  images: [
    {
      src: 'https://source.unsplash.com/random/512x744',
      alt: '',
      width: 512,
      height: 744
    },
    {
      src: 'https://source.unsplash.com/random/248x248',
      alt: '',
      width: 248,
      height: 248
    },
    {
      src: 'https://source.unsplash.com/random/380x248',
      alt: '',
      width: 380,
      height: 248
    }
  ],
  contacts: [
    {
      type: 'New Business',
      person: {
        name: 'Michelle Tang',
        title: 'Chief Marketing Officer'
      },
      cta: {
        label: 'michelletang@digitas.com',
        link: 'mailto:michelletang@digitas.com'
      }
    },
    {
      type: 'Media Inquiries',
      person: {
        name: 'Willa Robertson',
        title: 'Corporate Communications'
      },
      cta: {
        label: 'willa.robertson@digitas.com',
        link: 'mailto:willa.robertson@digitas.com'
      }
    },
    {
      type: 'Careers',
      person: {
        name: 'Willa Robertson',
        title: 'Human resources'
      },
      cta: {
        label: 'See our job opportunities',
        link: '/iframe.html?id=pages-careers--careers'
      }
    },
  ]
}
