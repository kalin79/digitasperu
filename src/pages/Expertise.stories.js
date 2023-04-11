import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroTitle from'@Components/HeroTitle/HeroTitle.twig'
import BetterConnections from "@Components/Expertise/BetterConnections/BetterConnections.twig"
import ArchivesInsight from "@Components/Expertise/ArchivesInsight/ArchivesInsight.twig"
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as BetterConnectionsStories from "@Components/Expertise/BetterConnections/BetterConnections.stories"
import * as ArchivesInsightStories from "@Components/Expertise/ArchivesInsight/ArchivesInsight.stories"
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { Expertise as page } from '@/config/pages'

export default {
  title: 'Pages/Expertise',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Dark({
    ...AppHeaderStories.Dark.args,
    pageTitle: 'Expertise'
  }, context),
  HeroTitle({
    title: 'Few Agencies Can Promise That&nbsp;Everything Is Integrated.<br><br>We can.',
    desc: '<p>Creative | Design | Strategy | Data&nbsp;&amp;&nbsp;Analytics | Media | Technology</p>',
  }),
  BetterConnections(BetterConnectionsStories.Basic.args),
  ArchivesInsight(ArchivesInsightStories.Basic.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 1 }),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Expertise = Template.bind({})
