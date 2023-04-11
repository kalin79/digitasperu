import ArchivesProject from './ArchivesProject.twig'
import theme from '@/config/storybook'
import { Work as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import { PROJECTS as items, FILTERS as filters } from '@/data/projects.json'

export default {
  title: 'Components/Work/ArchivesProject',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  ArchivesProject(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Bienvenido To<br>Media-Fueled Creativity',
  items,
  filters,
}
