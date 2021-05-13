import React from 'react';
import { graphql } from 'gatsby'
import Header from '../components/header/header';
import Portfolio from '../components/portfolio/portfolio';

export default function Home({ data }) {
    
    return (
        <div>
            <Header codeBlocks={data.allContentfulCodeBlock.edges} />
            <Portfolio projects={data.allContentfulProject.edges} />
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
    }
`