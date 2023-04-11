import Leadership from './Leadership.twig'
import theme from '@/config/storybook'
import COLORS from '@/config/colors'
import { About as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import { generateMembers } from '@/data/members'

export default {
  title: 'Components/About/Leadership',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string' }
    },
    members: {
      type: { name: 'array', required: true }
    },
    gaps: {
      type: { name: 'array', required: true }
    },
    ...theme.argTypes,
  },
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  Leadership(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Our leadership',
  members: generateMembers(22),
  panels: [
    {
      title: 'We are curious',
      color: COLORS.orange.contrast,
      contrastColor: 'black'
    },
    {
      title: 'We are unicorns',
      color: COLORS.green.contrast,
      contrastColor: 'black'
    },
    {
      title: 'Unicorns',
      color: COLORS.purple.contrast,
      contrastColor: 'white'
    }
  ]
}
