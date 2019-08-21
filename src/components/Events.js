import React, { useEffect, useState } from 'react'

import Event from '../components/Event'

const Events = ({ all = false, reverse = false }) => {
  let loaded = false
  const [events, setEvents] = useState([])

  useEffect(() => {
    ;(async () => {
      if (typeof window !== 'undefined') {
        const response = await window.fetch('https://events.surabayajs.org')
        setEvents(await response.json())
        loaded = true
      }
    })()
  })

  return events.length > 0 ? (
    events.reduce(
      (acc, e) =>
        e.Status === 'Scheduled' || all
          ? reverse
            ? [<Event key={e.Name} event={e} />, ...acc]
            : [...acc, <Event key={e.Name} event={e} />]
          : acc,
      []
    )
  ) : (
    <p className="gray mb7">
      {loaded ? 'There are no upcoming events :(' : 'Loading...'}
    </p>
  )
}

export default Events
