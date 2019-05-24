let BASE_URL = ""
let PORTOCOL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "localhost/nosecreekvalleymuseum"
  PORTOCOL = "http"
} else {
  BASE_URL = "dedi105.canspace.ca/~swbecreekvalleym"
  PORTOCOL = "http"
}

module.exports = {
  siteMetadata: {
    title: `Nose Creek Valley Museum`,
    description: `Big History. Little Museum.`,
    author: `Switchback Creative Inc.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `nosecreekvalleymuseum-theme`,
        short_name: `ncvm`,
        start_url: `/`,
        background_color: `#063044`,
        theme_color: `#063044`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `${BASE_URL}`,
        protocol: `${PORTOCOL}`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
