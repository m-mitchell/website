import React, { useContext } from 'react'

import Event from '../components/Event'
import { context } from '../store/EventProvider'

const Events = ({ all = false, reverse = false, fallbackClassName }) => {
  const { events, loaded } = useContext(context)

  const reducedEvents = events.reduce(
    (evts, evt) =>
      evt.Status === 'Scheduled' || all
        ? reverse
          ? [evt, ...evts]
          : [...evts, evt]
        : evts,
    []
  )

  if (!loaded) {
    return (
      <p className={'gray mb7 ' + fallbackClassName}>Loading...</p>
    );
  }

  if (reducedEvents.length > 0) {
    return (
      <>
        <div className="f6 mb4 tc tracked">UPCOMING EVENTS</div>
        {reducedEvents.map(e => <Event key={e.Name} event={e} />)}
      </>
    );
  }

  return (
    <>
      <div className="f6 mb4 tc tracked">RECENT EVENTS</div>
    <p className={'gray ' + fallbackClassName}>
      Here's what we've been up to lately:
    </p>
      {events.slice(0,6).map(e => <Event key={e.Name} event={e} />)}
    </>
  );
}

export default Events
