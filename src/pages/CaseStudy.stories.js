import AppFooter from '@Components/AppFooter/AppFooter.twig'
import AppBackground from '@Components/AppBackground/AppBackground.twig'
import PageReveal from '@Components/PageReveal/PageReveal.twig'
import HeroCase from '@Components/CaseStudy/HeroCase/HeroCase.twig'
import IntroCase from '@Components/CaseStudy/IntroCase/IntroCase.twig'
import ModuleImage from '@Components/CaseStudy/ModuleImage/ModuleImage.twig'
import ModuleImageFull from '@Components/CaseStudy/ModuleImageFull/ModuleImageFull.twig'
import ModuleText from '@Components/CaseStudy/ModuleText/ModuleText.twig'
import ModuleSlider from '@Components/CaseStudy/ModuleSlider/ModuleSlider.twig'
import ModuleTestimonial from '@Components/CaseStudy/ModuleTestimonial/ModuleTestimonial.twig'
import ModuleTextImages from '@Components/CaseStudy/ModuleTextImages/ModuleTextImages.twig'
import ModuleTwoImages from '@Components/CaseStudy/ModuleTwoImages/ModuleTwoImages.twig'
import ModuleVideo from '@Components/CaseStudy/ModuleVideo/ModuleVideo.twig'
import ModuleKeyFigures from '@Components/CaseStudy/ModuleKeyFigures/ModuleKeyFigures.twig'
import RelatedEntities from '@Components/RelatedEntities/RelatedEntities.twig'
import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'

import * as AppHeaderStories from '@Components/AppHeader/AppHeader.stories'
import * as AppFooterStories from '@Components/AppFooter/AppFooter.stories'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'
import * as HeroCaseStories from '@Components/CaseStudy/HeroCase/HeroCase.stories'
import * as IntroCaseStories from '@Components/CaseStudy/IntroCase/IntroCase.stories'
import * as ModuleImageStories from '@Components/CaseStudy/ModuleImage/ModuleImage.stories'
import * as ModuleImageFullStories from '@Components/CaseStudy/ModuleImageFull/ModuleImageFull.stories'
import * as ModuleTextStories from '@Components/CaseStudy/ModuleText/ModuleText.stories'
import * as ModuleSliderStories from '@Components/CaseStudy/ModuleSlider/ModuleSlider.stories'
import * as ModuleTestimonialStories from '@Components/CaseStudy/ModuleTestimonial/ModuleTestimonial.stories'
import * as ModuleTextImagesStories from '@Components/CaseStudy/ModuleTextImages/ModuleTextImages.stories'
import * as ModuleTwoImagesStories from '@Components/CaseStudy/ModuleTwoImages/ModuleTwoImages.stories'
import * as ModuleVideoStories from '@Components/CaseStudy/ModuleVideo/ModuleVideo.stories'
import * as ModuleKeyFiguresStories from '@Components/CaseStudy/ModuleKeyFigures/ModuleKeyFigures.stories'
import * as RelatedEntitiesStories from '@Components/RelatedEntities/RelatedEntities.stories'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

import theme from '@/config/storybook'
import { CaseStudy as page } from '@/config/pages'

export default {
  title: 'Pages/Case Study',
  ...theme,
  args: {
    ...page.args,
  }
}

const Template = (args, context) => [
  AppHeaderStories.Dark({
    ...AppHeaderStories.Dark.args,
    pageTitle: HeroCaseStories.Basic.args.title,
    withProgress: true
  }, context),
  HeroCase(HeroCaseStories.Basic.args),
  IntroCase(IntroCaseStories.Basic.args),
  ModuleVideo(ModuleVideoStories.Basic.args),
  ModuleText(ModuleTextStories.WithBackground.args),
  ModuleSlider(ModuleSliderStories.Basic.args),
  ModuleText(ModuleTextStories.NoTitle.args),
  ModuleImage(ModuleImageStories.WithBackground.args),
  ModuleTestimonial(ModuleTestimonialStories.WithBackground.args),
  ModuleTextImages(ModuleTextImagesStories.Basic.args),
  ModuleTextImages(ModuleTextImagesStories.OneImage.args),
  ModuleImage({
    ...ModuleImageStories.WithVideo.args,
    background: true
  }),
  ModuleTestimonial({
    ...ModuleTestimonialStories.WithBackground.args,
    eyebrow: 'Testimonial',
    background: 'secondary',
    author: {
      ...ModuleTestimonialStories.WithBackground.args.author,
      avatar: null
    }
  }),
  ModuleImageFull(ModuleImageFullStories.Basic.args),
  ModuleKeyFigures(ModuleKeyFiguresStories.Basic.args),
  ModuleTwoImages(ModuleTwoImagesStories.Basic.args),
  RelatedEntities(RelatedEntitiesStories.Projects.args),
  AppFooter(AppFooterStories.Basic.args),
  AppBackground(AppBackgroundStories.Basic.args),
  PageReveal(),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const CaseStudy = Template.bind({})
