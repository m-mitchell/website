import React, { createContext, useEffect, useState } from 'react'

export const context = createContext({ events: [], loaded: false })

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      window
        .fetch('https://events.surabayajs.org')
        .then(res => res.json())
        .then(e => {
          setEvents(e)
          setLoaded(true)
        })
    }
  }, [])

  return <context.Provider value={{ events, loaded }} children={children} />
}

export default EventProvider
