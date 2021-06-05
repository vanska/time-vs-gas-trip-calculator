const config = {
  // Project title. Used as SEO title and PWA name
  title: 'Time vs. Gas trip calculator PWA',
  // Project short name. Used by PWA
  shortTitle: 'Time vs. Gas',
  // Project description. Used in SEO meta tag and by PWA
  description: 'Trip calculator comparing gas usage between different travel speeds',
  // Keywords describing the project. Used in SEO meta tag
  keywords: ['gatsby', 'react', 'typescript', 'jest', 'pwa', 'graphql'],
  // Absolute deployment path (without trailing slash). Used as base URL in SEO meta tags
  baseUrl: 'https://time-vs-gas.vanska.dev',
  // Site language. Added in html tag and PWA manifest
  lang: 'en',
  // Your username on Facebook. Used in SEO meta tags
  facebookUsername: '',
  // Your username on Twitter (without @). Used in SEO meta tags
  twitterUsername: '',
  // Path to main favicon. Recommended size: 512x512. Other sizes are generated automatically
  favicon: 'src/icons/app-logo.svg',
  // Theme color. Used as color of device toolbar in supported browsers
  themeColor: '#362066',
  // Background color. Used as background on PWA launch screen. Recommended to make it the same as body color
  backgroundColor: '#362066',
}

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    baseUrl: config.baseUrl,
    lang: config.lang,
    // facebookUsername: config.facebookUsername,
    // twitterUsername: config.twitterUsername,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,500,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        display: 'standalone',
        name: config.title,
        short_name: config.shortTitle,
        description: config.description,
        lang: config.lang,
        icon: config.favicon,
        theme_color: config.themeColor,
        background_color: config.backgroundColor,
      },
    },
    'gatsby-plugin-offline',
  ],
}
