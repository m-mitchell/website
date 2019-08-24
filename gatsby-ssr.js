import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import EventProvider from './src/store/EventProvider'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const ConnectedBody = () => <EventProvider>{bodyComponent}</EventProvider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))

  const sheet = new ServerStyleSheet()
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />))
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}
