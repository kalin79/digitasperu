import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import OfficeDetails from '@Components/Contact/OfficeDetails/OfficeDetails.twig'
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as OfficeDetailsStories from '@Components/Contact/OfficeDetails/OfficeDetails.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import page from './Home.stories'

export default {
  title: 'Pages/Office',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Light({
    ...AppHeaderStories.Light.args,
    pageTitle: OfficeDetailsStories.Basic.args.title,
  }, context),
  OfficeDetails(OfficeDetailsStories.Basic.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 4 }),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Office = Template.bind({})
