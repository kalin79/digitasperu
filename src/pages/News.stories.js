import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroNews from '@Components/Pressroom/HeroNews/HeroNews.twig'
import NewsContent from '@Components/Pressroom/NewsContent/NewsContent.twig'
import RelatedNews from '@Components/Pressroom/RelatedNews/RelatedNews.twig'

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as HeroNewsStories from '@Components/Pressroom/HeroNews/HeroNews.stories'
import * as NewsContentStories from '@Components/Pressroom/NewsContent/NewsContent.stories'
import * as RelatedNewsStories from '@Components/Pressroom/RelatedNews/RelatedNews.stories'

import theme from '@/config/storybook'
import page from './Home.stories'

export default {
  title: 'Pages/News',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Light({
    ...AppHeaderStories.Light.args,
    pageTitle: HeroNewsStories.Basic.args.title,
    withProgress: true
  }, context),
  HeroNews(HeroNewsStories.Basic.args),
  NewsContent(NewsContentStories.Basic.args),
  RelatedNews(RelatedNewsStories.Basic.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 4 }),
  PageReveal(),
].join('')

export const News = Template.bind({})
