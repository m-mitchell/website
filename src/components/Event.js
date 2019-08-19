import React from 'react'

import A from '../components/ExtLink'

const Event = ({ event }) => {
  const date = new Date(event.Start).toLocaleDateString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="bl b--green bw1 dib pl3 pr4 w-50-l mb4">
      <h3 className="f3 lh-title mv2 tracked-tight">{event.Name}</h3>
      <p className="f6 i lh-copy">
        Presented by {event.Speakers.map(s => s.Name).join(', ')}
      </p>
      <div className="f6 lh-copy measure mv2">
        <p className="lh-copy">
          {date}
          <br />
          {event.Location.Name}
          <br />
          {event.Location.Address}
        </p>
        <A href={event.RSVP}>
          {event.Status === 'Finished' ? 'View ' : 'RSVP '}
          on Eventbrite
        </A>
      </div>
    </div>
  )
}

export default Event
