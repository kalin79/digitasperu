import Awards from './Awards.twig'
import theme from '@/config/storybook'
import { About as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/About/Awards',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

const AWARDS = [
  {
    title: 'Cannes Lion',
    description: '6 years in a row',
    logo: {
      src: '/assets/awards/cannes-lions.png',
      alt: 'Cannes Lion',
      width: 179,
      height: 96,
    },
  },
  {
    title: 'Best Places to Work',
    description: '6 years in a row',
    logo: {
      src: '/assets/awards/best-places-to-work.png',
      alt: 'Best Places to Work',
      width: 254,
      height: 60,
    },
  },
  {
    title: 'Addy',
    description: '6 years in a row',
    logo: {
      src: '/assets/awards/addy.png',
      alt: 'Addy',
      width: 208,
      height: 97,
    },
  },
  {
    title: 'Fast Company',
    description: '6 years in a row',
    logo: {
      src: '/assets/awards/fast-company.png',
      alt: 'Fast Company',
      width: 255,
      height: 50,
    },
  },
  {
    title: 'Gartner',
    description: '6 years in a row',
    logo: {
      src: '/assets/awards/gartner.png',
      alt: 'Gartner',
      width: 140,
      height: 32,
    },
  },
  {
    title: 'Clio Awards',
    description: '6 years in a row',
    logo: {
      src: '/assets/awards/clio-awards.png',
      alt: 'Clio Awards',
      width: 157,
      height: 82,
    },
  },
]

const Template = (args) => [
  Awards(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  eyebrow: 'Awards & recognition',
  title: 'awards',
  description: '<p>It’s more than just a numbers game-these honors reflect our dedication to a diverse and inclusive culture of relentless innovation.</p>',
  awards: [
    ...AWARDS,
    ...AWARDS,
  ],
}
