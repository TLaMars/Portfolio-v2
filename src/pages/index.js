import React from 'react';
import { graphql } from 'gatsby'
import Header from '../components/header/header';
import Portfolio from '../components/portfolio/portfolio';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

export default function Home({ data }) {
    
    return (
        <div>
            <Header codeBlocks={data.allContentfulCodeBlock.edges} />
            <Portfolio projects={data.allContentfulProject.edges} />
            <Skills skills={data.allContentfulSkill.edges} />
            <Contact />
            <Footer />
        </div>
    )
}


export const query = graphql`
    query Portfolio {
        allContentfulProject(sort: {order: ASC, fields: createdAt}) {
            edges {
                node {
                    description {
                        raw
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
        allContentfulCodeBlock {
            edges {
                node {
                    title
                    code {
                        raw
                    }
                }
            }
        }
        allContentfulSkill {
            edges {
                node {
                    name
                    type
                }
            }
        }
    }
`