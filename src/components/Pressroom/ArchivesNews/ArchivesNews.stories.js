import Template from './ArchivesNews.twig'

import { NEWS as years } from '@/data/news.json'

export default {
  title: 'Components/Pressroom/ArchivesNews',
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Pressroom',
  years
}
