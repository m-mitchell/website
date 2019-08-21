import { graphql } from 'gatsby'
import BgImg from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'

import Events from '../components/Events'
import A from '../components/ExtLink'
import Friends from '../components/Friends'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Supporters from '../components/Supporters'

const StyledDiv = styled(BgImg)`
  padding-top: 80px;
`

const Index = ({ data }) => {
  const props = {
    fluid: data.bg.childImageSharp.fluid,
    Tag: 'div',
    className: 'white',
  }

  return (
    <Layout beforeChildren={<Header homepage />}>
      <StyledDiv {...props}>
        <Hero className="pv4">
          <h1 className="f1-l f2 lh-title mv0 measure-narrow tracked-tight">
            Surabaya JavaScript User Group
          </h1>

          <p className="f3-l f4 lh-copy measure">
            SurabayaJS is a user group run by volunteers discussing everything
            JavaScript. Come and meet other developers and industry leaders
            interested in JavaScript and its ecosystem in Surabaya.
          </p>
        </Hero>
      </StyledDiv>

      <Hero className="pt4">
        <div className="f6 mb4 tc tracked">UPCOMING EVENTS</div>
        <Events reverse />
      </Hero>

      <Hero>
        <div className="f6 mb4 tc tracked">OTHER DEVELOPER GROUPS</div>
        <Friends />
      </Hero>

      <Hero className="pb4">
        <div className="f6 mb4 tc tracked">PROUDLY SUPPORTED BY</div>
        <Supporters />
      </Hero>

      <Hero className="pv4" outerClassName="bg-dark-green tc white">
        <h3 className="f2 lh-title mt2 mb0 tracked-tight">
          Join our community
        </h3>

        <p className="f4-l f5 lh-copy ml-auto mr-auto w-80-l">
          You can join our Telegram group and discuss with other members, as
          well as experts in their field. Or visit the community page for more
          information.
        </p>

        <div className="mv4">
          <A
            href="https://t.me/surabayajs"
            className="bg-white br2 dark-green mh1 ph3 pv2"
            children="Telegram Group"
          />
          <Link
            to="/community"
            className="ba b--white br2 mh1 ph3 pv2 white"
            children="Community Page"
          />
        </div>
      </Hero>
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    bg: file(relativePath: { eq: "sb-bg.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100
          duotone: { highlight: "#f5dfc4", shadow: "#214f3a" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
