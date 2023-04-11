import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroHome from '@Components/Home/HeroHome/HeroHome.twig'
import BannerNews from '@Components/BannerNews/BannerNews.twig'
import HomeLatestWork from '@Components/Home/HomeLatestWork/HomeLatestWork.twig'
import HomeNews from '@Components/Home/HomeNews/HomeNews.twig'
import ShuffleGallery from "@Components/ShuffleGallery/ShuffleGallery.twig"
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as HeroHomeStories from '@Components/Home/HeroHome/HeroHome.stories'
import * as BannerNewsStories from '@Components/BannerNews/BannerNews.stories'
import * as HomeLatestWorkStories from '@Components/Home/HomeLatestWork/HomeLatestWork.stories'
import * as HomeNewsStories from '@Components/Home/HomeNews/HomeNews.stories'
import * as ShuffleGalleryStories from '@Components/ShuffleGallery/ShuffleGallery.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

export default {
  title: 'Pages/Home',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Dark({
    ...AppHeaderStories.Dark.args,
    pageTitle: ''
  }, context),
  HeroHome(HeroHomeStories.Basic.args),
  BannerNews(BannerNewsStories.Basic.args),
  HomeLatestWork(HomeLatestWorkStories.Basic.args),
  HomeNews(HomeNewsStories.Basic.args),
  ShuffleGallery({
    ...ShuffleGalleryStories.Basic.args,
    title: 'We’re Open,<br/>Bold & <b>Curious</b>',
    subheading: '<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus.</p>',
  }),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 4 }),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args)
].join('')

export const Home = Template.bind({})
