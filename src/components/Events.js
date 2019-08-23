import React, { useEffect, useState } from 'react'

import Event from '../components/Event'

const Events = ({ all = false, reverse = false, fallbackClassName }) => {
  const [events, setEvents] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function run() {
      if (typeof window !== 'undefined') {
        const response = await window.fetch('https://events.surabayajs.org')
        const data = await response.json()

        setEvents(
          data.reduce(
            (acc, event) =>
              event.Status === 'Scheduled' || all
                ? reverse
                  ? [event, ...acc]
                  : [...acc, event]
                : acc,
            []
          )
        )
        setLoaded(true)
      }
    }

    run()
  }, [])

  return loaded && events.length > 0 ? (
    events.map(e => <Event key={e.Name} event={e} />)
  ) : (
    <p className={'gray mb7 ' + fallbackClassName}>
      {loaded ? 'There are no upcoming events :(' : 'Loading...'}
    </p>
  )
}

export default Events
