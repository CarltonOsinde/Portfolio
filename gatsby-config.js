module.exports = {
  siteMetadata: {
    title: `Carlton Osinde's Portfolio`,
    description: `Software Engineer with a passion for technology. Take a look through my past experiences and projects that I'm most proud of!`,
    author: `@CarltonOsinde`,
    siteUrl: `https://carltonosinde.ca`,
    keywords: `Carlton Osinde, engineer, back-end engineer, software engineer, computer science, founder`,
    image: `https://d1ap993fctyiv.cloudfront.net/dp.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carlton Osinde's Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://carltonosinde.ca",
        sitemap: "https://carltonosinde.ca/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
