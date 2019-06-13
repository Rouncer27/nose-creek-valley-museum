let BASE_URL = ""
let PORTOCOL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "dedi105.canspace.ca/~swbecreekvalleym"
  PORTOCOL = "http"
} else {
  BASE_URL = "dedi105.canspace.ca/~swbecreekvalleym"
  PORTOCOL = "http"
}

module.exports = {
  siteMetadata: {
    title: `Nose Creek Valley Museum`,
    description: `Big History. Little Museum.`,
    author: `Nose Creek Valley Museum`,
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://nosecreekvalleymuseum.com",
        sitemap: "https://nosecreekvalleymuseum.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nosecreekvalleymuseum.com`,
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
