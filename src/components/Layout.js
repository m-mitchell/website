import '../stylesheets/style.css'
import 'tachyons/css/tachyons.min.css'

import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Head from './Head'

const Main = styled.main`
  ${props => props.grow && 'flex-grow: 1;'}
`

const Layout = ({ beforeChildren, grow = true, ...props }) => (
  <>
    <Head />
    <div className="center dark-gray flex flex-column justify-between min-vh-100 sans-serif">
      {beforeChildren}
      <Main grow={grow} {...props} />
      <Footer />
    </div>
  </>
)

export default Layout
