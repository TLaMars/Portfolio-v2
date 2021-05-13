import React from 'react';
import { graphql } from 'gatsby'
import Header from '../components/header/header';
import Portfolio from '../components/portfolio/portfolio';

export default function Home({ data }) {
    
    return (
        <div>
            <Header />
            <Portfolio projects={data.allContentfulProject.edges} />
        </div>
    )
}


export const query = graphql`
    query Projects {
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
    }
`