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

  return loaded && reducedEvents.length > 0 ? (
    reducedEvents.map(e => <Event key={e.Name} event={e} />)
  ) : (
    <p className={'gray mb7 ' + fallbackClassName}>
      {loaded ? 'There are no upcoming events :(' : 'Loading...'}
    </p>
  )
}

export default Events
