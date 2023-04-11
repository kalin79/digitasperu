import Template from './WhoWeAre.twig'

export default {
  title: 'Components/About/WhoWeAre',
  argTypes: {
    eyebrow: {
      name: 'eyebrow',
      type: { name: 'string', required: true },
    },
    title: {
      name: 'title',
      type: { name: 'string', required: true },
    },
    content: {
      name: 'content',
      type: { name: 'string', required: true },
    }
  }
}

export const Basic = Template.bind({})
Basic.args = {
  eyebrow: 'Who we are',
  title: 'Fast, flexible and obsessively focused on the future.',
  content: '<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh. Donec nibh dignissim mauris et tellus pretium odio. Turpis odio consectetur purus egestas ultrices nisi ridiculus massa mi. Ipsum aliquam id iaculis enim quis purus orci lorem volutpat. Ac turpis vitae diam ipsum lorem amet. At turpis nisl ipsum mauris pretium erat eget purus. Habitant sed dignissim turpis dignissim venenatis, quis in. Pellentesque eu habitant orci sodales et lectus quam.</p>',
}
