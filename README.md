<p align="center">
  <a href="https://github.com/vanska/time-vs-gas-trip-calculator">
    <img
      src="src/icons/app-logo.svg"
      height="160"
      alt="Time vs. Gas Crip Calculator PWA logo"
    />
  </a>
</p>

<p align="center"><strong align="center">Time vs. Gas Trip Calculator PWA</strong></p>

<p align="center">
  <strong><a href="https://vanska.github.io/time-vs-gas-trip-calculator/">Try it out</a></strong>
</p>

## Introduction

This is a mobile first PWA for comparing spent time versus fuel on a given trip distance with a few different cars with different gas consumptions.

The goal of the design was to allow the user to quickly change values with sliders with enough accuracy while also providing a way to input absolute values if necessary without forgetting keyboard users.

## Dev stack

- ⚡️ React PWA framework `Gatsby@3`
- 🏔 State management with `Redux` and `Redux Toolkit`
- 💬 Static type checking with `Typescript`
- 🎨 Styled by `Emotion`
- 🎲 Testing with `Jest`
- 🤖 Hosted by `Github Pages`
- 🖼 Designed in `Figma`
  - [Access Figma prototype here](https://www.figma.com/proto/RnBOZuuElwDDrIT1NbNTev/Trip-calculator?page-id=0%3A1&node-id=19%3A21&viewport=547%2C-2371%2C0.40565285086631775&scaling=scale-down)

## Development platform

- Windows 10 with WSL2 inside VSCode
- Tested with `Chrome @91.0.4472.77`

## Setting up development

> Project requires `node` >= 12.13.0 and `npm` >= 6.14.12

```shell
git clone https://github.com/vanska/time-vs-gas-trip-calculator
cd time-vs-gas-trip-calculator
npm install
# Local development
npm run start
```

## Deploying to Github pages

[Step by step instructions](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)

1. Make sure the path prefix is the same as your repo name inside `gatsby-config.js` if you decide to rename the repo

   ```js
   // Change path prefix to match your repo name
   module.exports = {
     pathPrefix: '/time-vs-gas-trip-calculator',
   }
   ```

1. Commit changes
1. Build project and copy static files to `gh-pages` branch

   ```shell
   npm run deploy
   ```

1. Push to Github
1. Select `gh-pages` pages as publishing source within your repository's "Pages" settings inside Github
