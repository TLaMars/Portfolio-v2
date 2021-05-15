import React from 'react';
import { graphql } from 'gatsby'
import Header from '../components/sections/header/header';
import Portfolio from '../components/sections/portfolio/portfolio';
import Skills from '../components/sections/skills/skills';
import Contact from '../components/sections/contact/contact';
import Footer from '../components/sections/footer/footer';
import { Helmet } from 'react-helmet';

import { injectIntl } from "gatsby-plugin-intl"


function Home({ data, intl }) {
    return (
        <div>
            <Helmet>
                <title>Portfolio - Thomas Lamars</title>
                <meta name="title" content={data.site.siteMetadata.title} />
                <meta name="description" content={data.site.siteMetadata.description} />
            </Helmet>
            <Header />
            <Portfolio data={data.allContentfulHomePageProjects.edges[0].node} />
            <Skills data={data.allContentfulHomePageSkills.edges[0].node} />
            <Contact data={data.allContentfulHomePageContact.edges[0].node} />
            <Footer />
        </div>
    )
}


export const query = graphql`
    query Projects($locale: String) {
        allContentfulHomePageContact(filter: {node_locale: {eq: $locale}}) {
            edges {
                node {
                    subTitle
                    title
                    socials {
                        icon
                        title
                        url
                    }
                }
            }
        }
        allContentfulHomePageProjects(filter: {node_locale: {eq: $locale}}) {
            edges {
                node {
                    subTitle
                    title
                    projects {
                        example {
                            file {
                                url
                                fileName
                            }
                        }
                        description {
                            description
                        }
                        title
                        type
                        viewProject
                        usedTechnics
                    }
                }
            }
        }
        allContentfulHomePageSkills(filter: {node_locale: {eq: $locale}}) {
            edges {
                node {
                    subTitle
                    title
                    skills {
                        name
                        type
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

export default injectIntl(Home);