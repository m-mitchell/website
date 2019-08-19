import useFetch from 'fetch-suspense'
import React from 'react'

import Event from '../components/Event'

const Events = ({ all = false, sortByOld = false, ...props }) => {
  const events = useFetch('https://events.surabayajs.org')
  const fallback = <p className="gray mb7">There are no upcoming events :(</p>

  return events.length > 0
    ? events.reduce(
        (acc, e) =>
          e.Status === 'Scheduled' || all
            ? sortByOld
              ? [<Event key={e.Name} event={e} />, ...acc]
              : [...acc, <Event key={e.Name} event={e} />]
            : acc,
        []
      )
    : fallback
}

export default Events
