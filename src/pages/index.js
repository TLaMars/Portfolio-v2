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
            <Header codeBlocks={data.allContentfulCodeBlock.edges} />
            <Portfolio projects={data.allContentfulProject.edges} />
            <Skills skills={data.allContentfulSkill.edges} />
            <Contact />
            <Footer />
        </div>
    )
}


export const query = graphql`
    query Portfolio($locale: String) {
        allContentfulProject(filter: {node_locale: {eq: $locale}}) {
            edges {
                node {
                    description {
                        description
                    }
                    usedTechnics
                    viewProject
                    type
                    title
                    createdAt
                    example {
                        title
                        file {
                            url
                        }
                    }
                }
            }
        }
        allContentfulCodeBlock(filter: { node_locale: { eq: $locale } }) {
            edges {
                node {
                    title
                    code {
                        raw
                    }
                }
            }
        }
        allContentfulSkill(filter: { node_locale: { eq: $locale } }) {
            edges {
                node {
                    name
                    type
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