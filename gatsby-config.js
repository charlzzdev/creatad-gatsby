module.exports = {
  siteMetadata: {
    title: "creatad-gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "heZz5d9VL84yUdAEiwSgz9rjccAx7O5ShtZN5Hlbz9k",
        spaceId: "zq8el7xkf0p1",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
