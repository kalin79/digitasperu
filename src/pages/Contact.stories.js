import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import LetsConnect from '@Components/Contact/LetsConnect/LetsConnect.twig'
import UsOffices from '@Components/Contact/UsOffices/UsOffices.twig'
import AllOffices from '@Components/Contact/AllOffices/AllOffices.twig'
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as LetsConnectStories from '@Components/Contact/LetsConnect/LetsConnect.stories'
import * as UsOfficesStories from '@Components/Contact/UsOffices/UsOffices.stories'
import * as AllOfficesStories from '@Components/Contact/AllOffices/AllOffices.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import page from './Home.stories'

export default {
  title: 'Pages/Contact',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Light({
    ...AppHeaderStories.Light.args,
    pageTitle: 'Let’s Connect'
  }, context),
  LetsConnect(LetsConnectStories.Basic.args),
  UsOffices(UsOfficesStories.Basic.args),
  AllOffices(AllOfficesStories.Basic.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 4 }),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Contact = Template.bind({})
