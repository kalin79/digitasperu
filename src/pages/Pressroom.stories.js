import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import ArchivesNews from '@Components/Pressroom/ArchivesNews/ArchivesNews.twig'

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as ArchivesNewsStories from '@Components/Pressroom/ArchivesNews/ArchivesNews.stories'

import theme from '@/config/storybook'
import page from './Home.stories'

export default {
  title: 'Pages/Pressroom',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Light({
    ...AppHeaderStories.Light.args,
    pageTitle: ArchivesNewsStories.Basic.args.title,
  }, context),
  ArchivesNews(ArchivesNewsStories.Basic.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 4 }),
  PageReveal(),
].join('')

export const Pressroom = Template.bind({})
