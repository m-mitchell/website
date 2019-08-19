import 'tachyons/css/tachyons.min.css'
import 'typeface-ibm-plex-sans'

import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Head from './Head'

const Wrapper = styled.div`
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'avenir next',
    avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
    sans-serif !important;
`

const Layout = ({ beforeChildren, ...props }) => (
  <>
    <Head />
    <Wrapper className="center dark-gray flex flex-column justify-between min-vh-100 sans-serif">
      {beforeChildren}
      <main {...props} />
      <Footer />
    </Wrapper>
  </>
)

export default Layout
