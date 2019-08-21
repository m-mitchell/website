import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import ExtLink from '../components/ExtLink'

const A = styled(ExtLink)`
  width: 8rem;
`

const Icon = styled(Img)`
  width: 8rem;
`

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

  const meta = data.meta.edges.map(({ node }) => node)

  return (
    <div className="flex flex-wrap justify-center tc">
      {data.imgs.edges.map(({ node }, idx) => (
        <A key={node.id} href={meta[idx].url} className="ma4" noDim>
          <Icon
            fluid={node.childImageSharp.fluid}
            className="ba b--light-gray dim br-100"
          />
          <br />
          <small className="dark-green">{meta[idx].name}</small>
        </A>
      ))}
    </div>
  )
}

export default Friends
