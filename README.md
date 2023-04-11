# 2021 Digitas Website

## Introduction

This is the frontend of the 2021 version of Digitas website, made by [makemepulse](https://www.makemepulse.com/).

Some libraries used in this project:

*  [Storybook](https://storybook.js.org/) v6 — Each component can be tested in dedicated UI
*  [Twig Template Engine](https://twig.symfony.com/) v3 — Components template are written in Twig
*  [Tailwind](https://tailwindcss.com/) v2 — as CSS framework
*  [Alpine.js](https://alpinejs.dev/) v3 — as JS framework for front components
*  [Webpack](https://v4.webpack.js.org/) v4 — as bundler generator for all assets (CSS/JS/SVG, static files, etc…)


## Getting started

### Prerequisites

* npm ~> 7.19.1 (or yarn if prefered)

### Setup

*  `npm i` to install JS dependencies (or `yarn` if using yarn)

  
## Common commands

```sh
# Install jS dependencies
npm i

# Starts Storybook in development mode
npm run storybook

# Generate skeleton for new component/symbol (development only)
npm run template

# Build Storybook as a static web application
npm run build-storybook

# Build assets for production
npm run build
```
