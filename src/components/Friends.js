import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import IconList from './IconList'

const Friends = () => {
  const data = useStaticQuery(graphql`
    {
      imgs: allFile(
        filter: { relativePath: { regex: "/^friends-/" } }
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
      meta: allFriendsJson {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)

  return <IconList bordered showText {...data} />
}

export default Friends
