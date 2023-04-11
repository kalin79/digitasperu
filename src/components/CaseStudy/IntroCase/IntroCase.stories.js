import Template from './IntroCase.twig'

export default {
  title: 'Components/Case Study/IntroCase',
}

export const Basic = Template.bind({})
Basic.args = {
  tags: [
    { title: 'Connected Campaigns' },
    { title: 'Social Marketing' },
    { title: 'Brand Experience' },
  ],
  insight: '<p>The current tire buying process isn’t fast, easy, or convenient enough for millennial women. We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.</p>',
  idea: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam tortor, ullamcorper ac vehicula ut, faucibus non ligula. Etiam congue facilisis odio. Nulla at urna et orci egestas accumsan quis vel lectus. Suspendisse iaculis, orci nec congue posuere, sapien odio tempor dui, ut malesuada lacus lectus a velit. Morbi commodo justo nunc, et feugiat elit tincidunt eget. Donec et faucibus augue. Sed eros enim, dapibus eu nisl nec, eleifend efficitur nisl.</p>',
}
