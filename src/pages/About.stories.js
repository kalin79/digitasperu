import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroTitle from'@Components/HeroTitle/HeroTitle.twig'
import WhoWeAre from'@Components/About/WhoWeAre/WhoWeAre.twig'
import AboutVideo from "@Components/About/AboutVideo/AboutVideo.twig"
import Leadership from'@Components/About/Leadership/Leadership.twig'
import Awards from "@Components/About/Awards/Awards.twig";
import ShuffleGallery from "@Components/ShuffleGallery/ShuffleGallery.twig"
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as WhoWeAreStories from '@Components/About/WhoWeAre/WhoWeAre.stories'
import * as AboutVideoStories from "@Components/About/AboutVideo/AboutVideo.stories"
import * as LeadershipStories from '@Components/About/Leadership/Leadership.stories'
import * as AwardsStories from "@Components/About/Awards/Awards.stories"
import * as ShuffleGalleryStories from '@Components/ShuffleGallery/ShuffleGallery.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { About as page } from '@/config/pages'

export default {
  title: 'Pages/About',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Dark({
    ...AppHeaderStories.Dark.args,
    pageTitle: 'About'
  }, context),
  HeroTitle({
    title: 'Our DNA is just different.'
  }),
  WhoWeAre(WhoWeAreStories.Basic.args),
  AboutVideo(AboutVideoStories.Basic.args),
  Leadership(LeadershipStories.Basic.args),
  Awards(AwardsStories.Basic.args),
  ShuffleGallery({
    ...ShuffleGalleryStories.Basic.args,
    title: '<b>Unicorns</b> Giving Back',
    subheading: '<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus.</p>',
  }),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 2 }),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const About = Template.bind({})
