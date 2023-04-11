import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroTitle from '@Components/HeroTitle/HeroTitle.twig'
import ModulePlace from '@Components/Careers/ModulePlace/ModulePlace.twig'
import ArchivesJob from '@Components/Careers/ArchivesJob/ArchivesJob.twig'
import ShuffleGallery from '@Components/ShuffleGallery/ShuffleGallery.twig'
// import BannerNews from '@Components/BannerNews/BannerNews.twig'
import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as ModulePlaceStories from '@Components/Careers/ModulePlace/ModulePlace.stories'
import * as ArchivesJobStories from '@Components/Careers/ArchivesJob/ArchivesJob.stories'
import * as ShuffleGalleryStories from '@Components/ShuffleGallery/ShuffleGallery.stories'
// import * as BannerNewsStories from '@Components/BannerNews/BannerNews.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { Careers as page } from '@/config/pages'

export default {
  title: 'Pages/Careers',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Dark({
    ...AppHeaderStories.Dark.args,
    pageTitle: 'Careers'
  }, context),
  HeroTitle({
    title: 'Rewriting the Rules of Work.<br>Like Only Unicorns Can.'
  }),
  ModulePlace(ModulePlaceStories.Basic.args),
  ArchivesJob(ArchivesJobStories.Basic.args),
  ShuffleGallery({
    ...ShuffleGalleryStories.Basic.args,
    title: 'Current <b>Openings</b>',
    subheading: '<p>The latest job opportunities, benefits and more.</p>',
    background: true
  }),
  // BannerNews(BannerNewsStories.Tweets.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 5 }),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Careers = Template.bind({})
