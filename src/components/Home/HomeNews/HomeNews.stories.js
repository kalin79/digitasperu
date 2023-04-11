import HomeNews from './HomeNews.twig'
import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/Home/HomeNews',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  HomeNews(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Always Wondering<br>What’s Next',
  // subheading: '<p>Whether it’s an industry insight, a new technology, or a massive moment in culture, we’re driving what’s next. </p>',
  news: [
    {
      title: "How to Adapt Your Social Strategy to Unpredictable Times",
      link: '/iframe.html?id=pages-insight--insight',
      tag: "insights",
      thumbnail: {
        src: '/assets/news/insight.jpg',
        alt: '',
        width: 848,
        height: 1008
      }
    },
    {
      title: "Welcoming Gareth Johnson as the new executive account director",
      link: '/iframe.html?id=pages-news--news',
      tag: "news",
      thumbnail: {
        src: '/assets/news/news.jpg',
        alt: '',
        width: 848,
        height: 1008
      }
    },
    {
      title: "Digital Art Director",
      link: '/iframe.html?id=pages-job--job',
      tag: "career",
      thumbnail: {
        src: '/assets/news/career.jpg',
        alt: '',
        width: 848,
        height: 1008
      }
    }
  ],
}
