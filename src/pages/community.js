import { graphql } from 'gatsby'
import React from 'react'

import A from '../components/ExtLink'
import Head from '../components/Head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import trimProtocol from '../helpers/trimProtocol'

const Listify = ({ name = '', links = [] }) => (
  <>
    <b>{name}</b>
    <ul className="list pl0">
      {links.map(({ description, link }) => (
        <li key={description}>
          {description} - <A href={link}>{trimProtocol(link)}</A>
        </li>
      ))}
    </ul>
  </>
)

const Community = ({ data }) => {
  const list = data.allContactJson.edges
    .map(({ node }) => ({ ...node, key: node.name }))
    .map(props => <Listify {...props} />)

  return (
    <Layout beforeChildren={<Header />}>
      <Head pageTitle="Community" />

      <Hero>
        <h2 className="f2-l f3 lh-title mv0 tracked-tight">Community links</h2>

        <div className="lh-copy">
          <p className="measure-wide">
            Here is a list of our publication and social links. For business
            inquiries, event or collaboration discussions, you can contact us
            via email at{' '}
            <A href="mailto:hello@surabayajs.org" ext={false}>
              hello@surabayajs.org
            </A>
            .
          </p>

          <p>{list}</p>
        </div>
      </Hero>
    </Layout>
  )
}

export default Community

export const query = graphql`
  {
    allContactJson {
      edges {
        node {
          name
          links {
            description
            link
          }
        }
      }
    }
  }
`
