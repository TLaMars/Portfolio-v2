require("dotenv").config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        title: "Portfolio",
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
            },
        },
        "gatsby-plugin-postcss",
        "gatsby-plugin-sass",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-react-helmet",
    ],
};
