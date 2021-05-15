require("dotenv").config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        title: "Portfolio - Thomas Lamars",
        description: "Interested in the work of Thomas Lamars? Just check this portfolio and see what I am up to!",
        siteUrl: "https://thomaur.dev"
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: "https://thomaur.dev",
                sitemap: "",
                policy: [{ userAgent: '*', allow: '/' }]
            }
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
                redirect: false,
            },
        },
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations
                
                // Advanced Options
                selector: '[data-sal]', // Selector of the elements to be animated
                animateClassName: 'sal-animate', // Class name which triggers animation
                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                rootMargin: '0% 50%', // Corresponds to root's bounding box margin
                enterEventName: 'sal:in', // Enter event name
                exitEventName: 'sal:out', // Exit event name
            }
        },
        "gatsby-plugin-sitemap",
    ],
};
