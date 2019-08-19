import React, { Suspense } from 'react'

import Events from '../components/Events'
import A from '../components/ExtLink'
import Head from '../components/Head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const EventsPage = () => (
  <Layout beforeChildren={<Header />}>
    <Head pageTitle="Events" />

    <Hero>
      <h2 className="f2-l f3 lh-title mv0 tracked-tight">
        Meetups and Workshops
      </h2>

      <p className="lh-copy mb0 measure-wide">
        View current and past events, retrieved from{' '}
        <A href="https://events.surabayajs.org">our events API</A>. You can also
        view on{' '}
        <A href="https://airtable.com/shrWqrOg70Tl19Ggu">our Airtable base</A>{' '}
        or on{' '}
        <A href="https://www.eventbrite.com/o/surabayajs-19948370921">
          our Eventbrite page
        </A>
        .
      </p>
    </Hero>

    <Hero>
      <Suspense fallback={<p className="gray mb7">Loading...</p>}>
        <Events all />
      </Suspense>
    </Hero>
  </Layout>
)

export default EventsPage
