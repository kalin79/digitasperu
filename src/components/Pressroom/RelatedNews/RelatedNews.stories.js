import Template from './RelatedNews.twig'

import { NEWS as years } from '@/data/news.json'

export default {
  title: 'Components/Pressroom/RelatedNews',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string' }
    },
    news: {
      type: { name: 'array', required: true }
    }
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Discover',
  news: years[0].items.slice(0, 3)
}
