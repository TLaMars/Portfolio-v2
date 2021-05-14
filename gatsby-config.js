require("dotenv").config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        title: "Portfolio - Thomas Lamars",
        description: "Interested in the work of Thomas Lamars? Just check this portfolio and see what I am up to!"
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Portfolio Thomas Lamars`,
                short_name: `Portfolio`,
                start_url: `/`,
                background_color: `#182225`,
                theme_color: `#42C789`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/intl`,
                // supported language
                languages: [`en`, `nl`],
                // language file path
                defaultLanguage: `en`,
                // option to redirect to `/ko` when connecting `/`
                redirect: true,
            },
        },
    ],
};
