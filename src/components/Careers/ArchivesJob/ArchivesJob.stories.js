import ArchivesJob from './ArchivesJob.twig'
import theme from '@/config/storybook'
import { Careers as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import { JOBS as items, CITIES as cities, FILTERS as filters } from '@/data/jobs.json'

export default {
  title: 'Components/Careers/ArchivesJob',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  ArchivesJob(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Opportunities',
  items,
  cities,
  filters
}
