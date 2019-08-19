import cns from '@sindresorhus/class-names'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Nav = styled(Link).attrs(({ last = false }) => ({
  activeClassName: 'b',
  className: `dib dim link pl2 ${last ? 'pr0' : 'pr2'} v-mid white`,
}))``

const Header = ({ homepage = false }) => {
  const classes = cns('fl pa4 w-100 z-5', {
    absolute: homepage,
    'bg-dark-green': !homepage,
  })

  const data = useStaticQuery(graphql`
    {
      img: file(relativePath: { eq: "gator.png" }) {
        childImageSharp {
          fixed(height: 24) {
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <nav className={classes}>
      <div className="mw8 ml-auto mr-auto">
        <div className="fl">
          <Link to="/" className="b dim link tracked-tight white">
            <img
              {...data.img.childImageSharp.fixed}
              alt="Gator"
              className="dib v-mid"
            />
            <span className="dib-l dn ml3 v-mid">SurabayaJS</span>
          </Link>
        </div>

        <div className="fr tr">
          <Nav to="/about">About</Nav>
          <Nav to="/events">Events</Nav>
          <Nav to="/community">Community</Nav>
        </div>
      </div>
    </nav>
  )
}

export default Header
