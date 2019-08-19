import React from 'react'

import Ellipsis from '../components/Ellipsis'
import A from '../components/ExtLink'
import Head from '../components/Head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Link from '../components/Link'

const QA = ({ q, a }) => (
  <>
    <h4 className="f4 lh-title mb0 measure tracked-tight">{q}</h4>
    <p className="lh-copy mb4 measure-wide">{a}</p>
  </>
)

const About = () => (
  <Layout beforeChildren={<Header />}>
    <Head pageTitle="About" />

    <Hero>
      <h2 className="f2-l f3 h-title measure-narrow mt0 tracked-tight">
        SurabayaJS is a user group run by volunteers discussing everything
        JavaScript.
      </h2>

      <p className="lh-copy measure-wide">
        We meet in borrowed spaces, graciously provided by different companies
        and organisations. Our purpose is to provide a place where our members
        have a good time talking about programming, sharing their knowledge and
        meeting other passionate folks. We keep it friendly, inclusive and
        positive.
      </p>

      <Ellipsis />

      <QA
        q="Are SurabayaJS meetups and workshops free to attend?"
        a={
          <>
            Except otherwise noted, all events are free. RSVP events via our
            Eventbrite link at{' '}
            <A href="https://surabayajs.eventbrite.com">
              surabayajs.eventbrite.com
            </A>
            .
          </>
        }
      />

      <QA
        q="Who can come to events?"
        a="Anyone! Students from any level, developers or engineers from various professions, and even those who are new to programming."
      />

      <QA
        q="Can I come if I haven't RSVP or quota is full?"
        a="Unless informed to attend, RSVP is required because our events have restricted spaces."
      />

      <QA
        q="I got stuck at traffic. Is coming late okay?"
        a="Definitely, just come and join."
      />

      <QA
        q="I have other questions."
        a={
          <>
            You can join our Telegram group at{' '}
            <A href="https://t.me/surabaya.js">t.me/surabaya.js</A> and discuss
            with other members. Or visit the{' '}
            <Link to="/community">community page</Link> for more information.
          </>
        }
      />
    </Hero>
  </Layout>
)

export default About
