import BannerNews from './BannerNews.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/BannerNews',
  argTypes: {
    items: {
      type: { name: 'array', required: true }
    },
    speed: {
      name: 'speed',
      type: 'number',
      description: 'Scroll speed in pixels per second. 0 to disable.',
      control: {
        type: 'range',
        min: 0,
        max: 500,
        step: 10
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      }
    },
    roll: {
      name: 'roll',
      type: 'boolean',
      description: 'Add roll effect to each letters of titles.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    ...theme.argTypes,
  },
  args: {
    speed: 100,
    roll: true,
    ...theme.args,
    primaryColor: COLORS.purple.contrast,
    primaryContrastColor: 'white',
  }
}

const Template = (args) => [
  BannerNews(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  items: [
    {
      category: 'News',
      title: 'Welcoming Gareth Johnson as the new executive account director',
      link: '#news'
    },
    {
      category: 'Awards',
      title: 'Digitas Wins Best Digital Network & Best Media Network at Campaign US Agency of the Year Awards'
    },
  ],
}

export const Tweets = Template.bind({})
Tweets.args = {
  items: [
    {
      icon: 'twitter',
      title: 'Wishing everyone a safe and fun 4th of July weekend. And remember, Independence Day the movie is now 25 years old. Think about it.',
      link: 'https://twitter.com/Digitas/status/1410980331138674695'
    },
    {
      icon: 'twitter',
      title: 'Our CCO, Atit Shah, joined #TheCMOPodcast with Jon Hall of @WhirlpoolCorp to chat about the rebrand of @jennair (it won a Gold Effie btw) ...',
      link: 'https://twitter.com/Digitas/status/1397635436722409477'
    },
  ],
}
