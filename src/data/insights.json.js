const TOPICS = [
  { id: 'topic_1', title: 'Avestibulum' },
  { id: 'topic_2', title: 'Cit nunc urna' },
  { id: 'topic_3', title: 'convallis Tempor' },
  { id: 'topic_4', title: 'Dellus sodales' },
  { id: 'topic_5', title: 'mattis namic' },
  { id: 'topic_6', title: 'Mi vivamus venenatis' },
  { id: 'topic_7', title: 'EXAMPLE OF A VERY LONG TOPIC WRITTEN' },
  { id: 'topic_8', title: 'OVitae eget faucibus' },
  { id: 'topic_9', title: 'porttitor faucibus' },
  { id: 'topic_10', title: 'qisque lorem' },
  { id: 'topic_11', title: 'Qestibulum LOREM' },
  { id: 'topic_12', title: 'Rit nunc urna' },
  { id: 'topic_13', title: 'Ronvallis Tempor' },
  { id: 'topic_14', title: 'Tellus venenatis' },
  { id: 'topic_15', title: 'Tattis porttitor' },
  { id: 'topic_16', title: 'Ui vivamus venenatis' },
  { id: 'topic_17', title: 'Vignissim sit id' },
  { id: 'topic_18', title: 'Vitae eget faucibus' },
  { id: 'topic_19', title: 'Wuisque lorem' },
  { id: 'topic_20', title: 'Zellus sodales urna' }
]

const SOLUTIONS = [
  { id: 'connected_campaigns', title: 'Connected Campaigns', color: '#ff1400', contrastColor: 'black' },
  { id: 'social_marketing', title: 'Social Marketing', color: '#230AFF', contrastColor: 'white' },
  { id: 'brand_experience', title: 'Brand Experience', color: '#FF00DD', contrastColor: 'black' },
  { id: 'crm_loyalty', title: 'CRM & Loyalty', color: '#FE9F00', contrastColor: 'black' },
  { id: 'marketing_transformation', title: 'Marketing Transformation', color: '#7C00FF', contrastColor: 'black' }
]

const AUTHORS = [
  {
    id: 'author_1',
    name: 'Robert Knapp',
    title: 'VP/Director, Search Marketing',
    avatar: {
      src: '/assets/authors/author_1.png',
      alt: '',
      width: 112,
      height: 112
    }
  },
  {
    id: 'author_2',
    name: 'Danisha Lomax',
    title: 'SVP, National Paid Social Lead',
    avatar: {
      src: '/assets/authors/author_2.png',
      alt: '',
      width: 800,
      height: 801
    }
  },
  {
    id: 'author_3',
    name: 'Lydia Cox',
    title: 'VP/Director, Social Strategy',
    avatar: {
      src: '/assets/authors/author_1.png',
      alt: '',
      width: 112,
      height: 112
    }
  },
  {
    id: 'author_4',
    name: 'Michael Daley',
    title: 'Data Strategist',
    avatar: {
      src: '/assets/authors/author_2.png',
      alt: '',
      width: 800,
      height: 801
    }
  },
  {
    id: 'author_5',
    name: 'Michelle Tang',
    title: 'Chief Marketing Officer',
    avatar: {
      src: '/assets/authors/author_1.png',
      alt: '',
      width: 112,
      height: 112
    }
  }
]

const INSIGHTS = [
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[1],
      AUTHORS[2],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'How to Adapt Your Social Strategy to Unpredictable Times',
    size: 'medium',
    thumbnail: {
      src: '/assets/insights/insight_1.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[0],
      SOLUTIONS[4],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[1],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'Dignissim sodales ut eu sem integer',
    size: 'large',
    thumbnail: {
      src: '/assets/insights/insight_2.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[1],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[2],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus',
    size: 'small',
    thumbnail: {
      src: '/assets/insights/insight_3.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[2],
      SOLUTIONS[3],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[3],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'Consequat ac felis donec et odio pellentesque',
    size: 'small',
    thumbnail: {
      src: '/assets/insights/insight_4.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[3],
      SOLUTIONS[4],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[0],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'Elit ut aliquam purus sit amet',
    size: 'medium',
    thumbnail: {
      src: '/assets/insights/insight_5.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[0],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[1],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'Pretium vulputate sapien nec sagittis aliquam malesuada',
    size: 'small',
    thumbnail: {
      src: '/assets/insights/insight_6.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[1],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[2],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'Pretium vulputate sapien nec sagittis aliquam malesuada',
    size: 'large',
    thumbnail: {
      src: '/assets/insights/insight_4.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[2],
      SOLUTIONS[4],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[3],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'How to Adapt Your Social Strategy to Unpredictable Times',
    size: 'medium',
    thumbnail: {
      src: '/assets/insights/insight_3.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[0],
      SOLUTIONS[3],
    ],
    topics: [
      TOPICS[0],
    ]
  },
  {
    date: '2021-05-14',
    authors: [
      AUTHORS[0],
    ],
    link: '/iframe.html?id=pages-insight--insight',
    title: 'Consequat ac felis donec et odio pellentesque',
    size: 'small',
    thumbnail: {
      src: '/assets/insights/insight_2.png',
      alt: '',
    },
    categories: [
      SOLUTIONS[0],
    ],
    topics: [
      TOPICS[0],
    ]
  }
]

const FILTERS = {
  title: 'Explore insights by filters',
  types: [
    {
      label: 'FILTER BY TOPIC',
      taxonomy: 'topic',
      terms: TOPICS
    },
    {
      label: 'FILTER BY SOLUTION',
      taxonomy: 'solution',
      terms: SOLUTIONS
    },
    {
      label: 'FILTER BY AUTHOR',
      taxonomy: 'author',
      terms: [
        ...AUTHORS.map(v => ({ id: v.id, title: v.name, thumbnail: v.avatar }))
      ]
    }
  ]
}

let insights = []
for (let i = 0; i < 3; i++) {
  insights = insights.concat(INSIGHTS)
}

export {
  insights as default,
  insights as INSIGHTS,
  TOPICS,
  AUTHORS,
  SOLUTIONS,
  FILTERS
}
