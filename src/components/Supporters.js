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

  const meta = data.meta.edges.map(({ node }) => node)

  return (
    <div className="flex flex-wrap items-center justify-center tc">
      {data.imgs.edges.map(({ node }, idx) => (
        <A key={node.id} href={meta[idx].url} className="hide-child ma4" noDim>
          <Icon fluid={node.childImageSharp.fluid} className="dim" />
          <br />
          <small className="child dark-green">{meta[idx].name}</small>
        </A>
      ))}
    </div>
  )
}

export default Supporters
