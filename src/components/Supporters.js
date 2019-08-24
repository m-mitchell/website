import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import IconList from './IconList'

const Supporters = () => {
  const data = useStaticQuery(graphql`
    {
      imgs: allFile(
        filter: { relativePath: { regex: "/^supporters-/" } }
        sort: { fields: [relativePath] }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      meta: allSupportersJson {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)

  return <IconList {...data} />
}

export default Supporters
