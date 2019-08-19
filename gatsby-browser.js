import React from 'react'

import AppProvider from './src/store/provider'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer')
    console.log('# IntersectionObserver is polyfilled!')
  }
}

// https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
