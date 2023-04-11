import ArchivesInsight from './ArchivesInsight.twig'
import theme from '@/config/storybook'
import { Expertise as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import { INSIGHTS as items, FILTERS as filters } from '@/data/insights.json'

export default {
  title: 'Components/Expertise/ArchivesInsight',
  argTypes: {
    itemsPerPage: {
      name: 'itemsPerPage',
      type: 'number',
      description: 'Number of insights to load at once. Should be a multiple of 3.',
      control: {
        type: 'range',
        min: 3,
        max: 9 * 3,
        step: 3
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 9 }
      }
    },
    ...theme.argTypes,
  },
  args: {
    itemsPerPage: 9,
    ...theme.args,
    ...page.args,
  }
}


const Template = (args) => [
  ArchivesInsight(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: ['What’s now', 'what’s next'],
  subheading: '<p>Whether it’s an industry insight, a new technology, or a massive moment in culture, we’re driving what’s next.</p>',
  items,
  filters,
}

