const path = require("path");

const ARTICLES_DIR = path.join(__dirname, "content", "articles");
const IMAGES_DIR = path.join(__dirname, "content", "assets");
const CMS_FILE = path.join(__dirname, "src", "cms", "cms.js");

module.exports = {
  siteMetadata: {
    title: "SSC TIMES",
    description:
      "Digital newspaper of Kotebe Metropolitan University Menelic I Science Shared Campus.",
    author: "Fraol Lemecha",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: IMAGES_DIR,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: ARTICLES_DIR,
        name: "articles",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              staticFolderName: IMAGES_DIR,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "SSC TIMES",
        short_name: "SSC TIMES",
        start_url: "/index.html",
        background_color: "#000",
        theme_color: "#000",
        display: "standalone",
        icon: "src/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/", "/index.html", "/*"],
      },
    },
  ],
};
