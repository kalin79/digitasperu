import HomeLatestWork from './HomeLatestWork.twig'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import PROJECTS from '@/data/projects.json'

export default {
  title: 'Components/Home/HomeLatestWork',
}

const Template = (args) => [
  HomeLatestWork(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Where<br>Media + Creativity<br>Work As One.',
  subheading: '<p>In this ad-blocked, always distracted world, brands that seamlessly connect with their audiences at the right time and place with the right message are the brands that win hearts and minds.</p>',
  highlightedProject: PROJECTS.find(project => project.highlighted),
  projects: PROJECTS.filter(project => !project.highlighted).slice(0, 3),
}
