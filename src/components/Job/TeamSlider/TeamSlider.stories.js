import TeamSlider from './TeamSlider.twig'
import theme from '@/config/storybook'
import { Job as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import { generateMembers } from '@/data/members'

export default {
  title: 'Components/Job/TeamSlider',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string' }
    },
    ...theme.argTypes,
  },
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  TeamSlider(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Meet Some Of Our&nbsp;<b>Planning Team</b>',
  members: generateMembers(8)
}
