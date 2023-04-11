import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroInsight from '@Components/Insight/HeroInsight/HeroInsight.twig'
import InsightContent from '@Components/Insight/InsightContent/InsightContent.twig'
import InsightFooter from '@Components/Insight/InsightFooter/InsightFooter.twig'
import RelatedEntities from '@Components/RelatedEntities/RelatedEntities.twig'
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as HeroInsightStories from '@Components/Insight/HeroInsight/HeroInsight.stories'
import * as InsightContentStories from '@Components/Insight/InsightContent/InsightContent.stories'
import * as InsightFooterStories from '@Components/Insight/InsightFooter/InsightFooter.stories'
import * as RelatedEntitiesStories from '@Components/RelatedEntities/RelatedEntities.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { Insight as page } from '@/config/pages'

export default {
  title: 'Pages/Insight',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Default({
    ...AppHeaderStories.Dark.args,
    pageTitle: HeroInsightStories.Basic.args.title.replace(/<\s*\/?br\s*[\/]?>/gi, ''),
    withProgress: true
  }, context),
  HeroInsight(HeroInsightStories.Basic.args),
  InsightContent(InsightContentStories.Basic.args),
  InsightFooter(InsightFooterStories.Basic.args),
  RelatedEntities(RelatedEntitiesStories.Insights.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground(AppBackgroundStories.Basic.args),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Insight = Template.bind({})
