import { SOLUTIONS } from './insights.json'

const CLIENTS = [
  { id: 'client_1', title: 'AES' },
  { id: 'client_2', title: 'Aldi' },
  { id: 'client_3', title: 'American Express' },
  { id: 'client_4', title: 'Coca-Cola' },
  { id: 'client_5', title: 'CVS Health' },
  { id: 'client_6', title: 'Delta' },
  { id: 'client_7', title: 'Dow' },
  { id: 'client_8', title: 'Dunkin' },
  { id: 'client_9', title: 'Edgewell' },
  { id: 'client_10', title: 'Emerson' },
  { id: 'client_11', title: 'Goodyear' },
  { id: 'client_12', title: 'KitchenAid' },
]

const PROJECTS = [
  {
    "title": "Kalin JFK Moonshot",
    "excerpt": "An AR re-creation of the Apollo 11 mission.",
    "link": "/iframe.html?id=pages-case-study--case-study",
    "thumbnail": {
      "src": "https://source.unsplash.com/random/1288x1376?sig=2",
      "alt": "",
      "width": 1288,
      "height": 1376
    },
    "client": [
      CLIENTS[0]
    ],
    "tags": [
      SOLUTIONS[2],
      SOLUTIONS[1],
    ],
    "color": "#FE9F00",
    "contrastColor": "black"
  },
  {
    "title": "The Future of Travel",
    "excerpt": "Bringing Delta Airlines innovation to life at CES.",
    "link": "/iframe.html?id=pages-case-study--case-study",
    "thumbnail": {
      "src": "https://source.unsplash.com/random/1288x1008?sig=1",
      "alt": "",
      "width": 1288,
      "height": 1008
    },
    "client": [
      CLIENTS[5]
    ],
    "tags": [
      SOLUTIONS[2],
      SOLUTIONS[4],
    ],
    "color": "#230AFF",
    "contrastColor": "white"
  },
  {
    "title": "CVS Beauty Mark",
    "excerpt": "Changing nothing can change everything.",
    "link": "/iframe.html?id=pages-case-study--case-study",
    "thumbnail": {
      "src": "https://source.unsplash.com/random/1288x1008?sig=3",
      "alt": "",
      "width": 1288,
      "height": 1008
    },
    "client": [
      CLIENTS[4]
    ],
    "tags": [
      SOLUTIONS[1],
      SOLUTIONS[2],
    ],
    "color": "#7C00FF",
    "contrastColor": "white"
  },
  {
    "title": "A Woman’s Place on Hulu",
    "excerpt": "Drive awareness of the gender bias and inequality in the culinary industry.",
    "link": "/iframe.html?id=pages-case-study--case-study",
    "thumbnail": {
      "src": "https://source.unsplash.com/random/1288x1008?sig=4",
      "alt": "",
      "width": 1288,
      "height": 1008
    },
    "client": [
      CLIENTS[11]
    ],
    "tags": [
      SOLUTIONS[3],
      SOLUTIONS[0],
    ],
    "color": "#7C00FF",
    "contrastColor": "white"
  },
  {
    "title": "Delta Skymiles Life",
    "excerpt": "Mauris molestie libero in odio tincidunt varius",
    "link": "/iframe.html?id=pages-case-study--case-study",
    "thumbnail": {
      "src": "https://source.unsplash.com/random/1288x1008?sig=5",
      "alt": "",
      "width": 1288,
      "height": 1008
    },
    "client": [
      CLIENTS[5]
    ],
    "tags": [
      SOLUTIONS[2],
      SOLUTIONS[1],
      SOLUTIONS[4],
    ],
    "color": "#7C00FF",
    "contrastColor": "white"
  },
  {
    "title": "Sprite Facing a Hater",
    "excerpt": "A Social Experiment",
    "link": "/iframe.html?id=pages-case-study--case-study",
    "thumbnail": {
      "src": "https://source.unsplash.com/random/1288x1008?sig=6",
      "alt": "",
      "width": 1288,
      "height": 1008
    },
    "client": [
      CLIENTS[3]
    ],
    "tags": [
      SOLUTIONS[1],
    ],
    "color": "#7C00FF",
    "contrastColor": "white"
  },
  {
    "title": "Roll By GoodYear",
    "excerpt": "We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.",
    "link": "/iframe.html?id=pages-case-study--case-study",
    "thumbnail": {
      "src": "https://source.unsplash.com/random/1288x1008?sig=7",
      "alt": "",
      "width": 1288,
      "height": 1008
    },
    "client": [
      CLIENTS[10]
    ],
    "tags": [
      SOLUTIONS[0],
      SOLUTIONS[2],
    ],
    "color": "#FFDC00",
    "contrastColor": "black",
    "highlighted": true
  }
]

const FILTERS = {
  title: 'Explore Work<br>by filters',
  types: [
    {
      label: 'Filter by client',
      taxonomy: 'client',
      terms: CLIENTS
    },
    {
      label: 'Filter by solution',
      taxonomy: 'solution',
      terms: SOLUTIONS
    }
  ]
}

let projects = []
for (let i = 0; i < 3; i++) {
  projects = projects.concat(PROJECTS)
}

export {
  projects as default,
  projects as PROJECTS,
  CLIENTS,
  SOLUTIONS,
  FILTERS
}
