import '../stylesheets/style.css'
import 'tachyons/css/tachyons.min.css'

import React from 'react'

import Footer from './Footer'
import Head from './Head'

const Layout = ({ beforeChildren, ...props }) => (
  <>
    <Head />
    <div className="center dark-gray flex flex-column justify-between min-vh-100 sans-serif">
      {beforeChildren}
      <main {...props} />
      <Footer />
    </div>
  </>
)

export default Layout
