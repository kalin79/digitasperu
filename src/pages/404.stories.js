import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import PageNotFound from '@Components/PageNotFound/PageNotFound.twig'

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as PageNotFoundStories from '@Components/PageNotFound/PageNotFound.stories'

import theme from '@/config/storybook'
import page from './Home.stories'

export default {
  title: 'Pages/Page 404',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Light({
    ...AppHeaderStories.Light.args,
    pageTitle: PageNotFoundStories.Basic.args.title.join(' '),
  }, context),
  PageNotFound(PageNotFoundStories.Basic.args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 4 }),
  PageReveal(),
].join('')

export const Page404 = Template.bind({})
