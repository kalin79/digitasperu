import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroJob from '@Components/Job/HeroJob/HeroJob.twig'
import JobDescription from '@Components/Job/JobDescription/JobDescription.twig'
import ModuleTestimonial from '@Components/CaseStudy/ModuleTestimonial/ModuleTestimonial.twig'
import TeamSlider from '@Components/Job/TeamSlider/TeamSlider.twig'
import JobFooter from '@Components/Job/JobFooter/JobFooter.twig'
import CustomCursor from "@Components/CustomCursor/CustomCursor.twig"

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as HeroJobStories from '@Components/Job/HeroJob/HeroJob.stories'
import * as JobDescriptionStories from '@Components/Job/JobDescription/JobDescription.stories'
import * as ModuleTestimonialStories from '@Components/CaseStudy/ModuleTestimonial/ModuleTestimonial.stories'
import * as TeamSliderStories from '@Components/Job/TeamSlider/TeamSlider.stories'
import * as JobFooterStories from '@Components/Job/JobFooter/JobFooter.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { Job as page } from '@/config/pages'

export default {
  title: 'Pages/Job',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Default({
    ...AppHeaderStories.Dark.args,
    pageTitle: `${HeroJobStories.Basic.args.title.replace(/<\s*\/?br\s*[\/]?>/gi, '')} | ${HeroJobStories.Basic.args.city}`,
    withProgress: true
  }, context),
  HeroJob(HeroJobStories.Basic.args),
  JobDescription(JobDescriptionStories.Basic.args),
  ModuleTestimonial({
    ...ModuleTestimonialStories.WithBackground.args,
    eyebrow: 'A day in a Life Digital Planner'
  }),
  TeamSlider(TeamSliderStories.Basic.args),
  JobFooter(JobFooterStories.Basic.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground(AppBackgroundStories.Basic.args),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Job = Template.bind({})
