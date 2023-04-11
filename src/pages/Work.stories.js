import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroTitle from'@Components/HeroTitle/HeroTitle.twig'
import ArchivesProject from'@Components/Work/ArchivesProject/ArchivesProject.twig'
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as ArchivesProjectStories from '@Components/Work/ArchivesProject/ArchivesProject.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { Work as page } from '@/config/pages'

export default {
  title: 'Pages/Work',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Dark({
    ...AppHeaderStories.Dark.args,
    pageTitle: 'Work'
  }, context),
  HeroTitle({
    title: 'When You Reimagine How Your Brand Shows Up in the World, the Possibilities Are Limitless'
  }),
  ArchivesProject(ArchivesProjectStories.Basic.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 3 }),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Work = Template.bind({})
