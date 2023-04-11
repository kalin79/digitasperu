import RelatedEntities from './RelatedEntities.twig'
import theme from '@/config/storybook'
import { CaseStudy as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import PROJECTS from '@/data/projects.json'
import INSIGHTS from '@/data/insights.json'

export default {
  title: 'Components/RelatedEntities',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string' }
    },
    eyebrow: {
      name: 'eyebrow',
      type: { name: 'string' }
    },
    type: {
      name: 'type',
      type: { name: 'string', required: true },
      options: ['project', 'insight'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
      }
    },
    items: {
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
  RelatedEntities(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Projects = Template.bind({})
Projects.args = {
  title: 'Discover',
  type: 'project',
  items: [
    PROJECTS[1],
    PROJECTS[0],
    PROJECTS[2],
  ],
}

export const Insights = Template.bind({})
Insights.args = {
  title: 'Discover',
  eyebrow: '6 others',
  type: 'insight',
  items: INSIGHTS.slice(0, 6),
}
