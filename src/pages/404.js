import React from 'react'

import Head from '../components/Head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Link from '../components/Link'

const NotFound = ({ location }) => (
  <Layout beforeChildren={<Header />}>
    <Head pageTitle="404" />

    <Hero>
      <h1 className="f-headline solid tracked-tight">404 Not Found</h1>
      <p>
        We can't find{' '}
        <code className="ba b--gray bg-gray br2 ph2 pv1 white">
          {location.href}
        </code>{' '}
        anywhere. You should go back to <Link to="/">home page</Link>.
      </p>
    </Hero>
  </Layout>
)

export default NotFound
