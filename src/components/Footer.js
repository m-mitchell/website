import React from 'react'

import A from './ExtLink'

const Footer = () => (
  <footer className="pa4">
    <div className="f7 lh-copy mw8 ml-auto mr-auto w-100">
      Made with <A href="https://tachyons.io" children="Tachyons" /> and{' '}
      <A href="https://gatsbyjs.org" children="Gatsby.js" />. Hosted on{' '}
      <A href="https://zeit.co/now" children="ZEIT Now" />. <br />
      Source code licensed under the{' '}
      <A href="https://github.com/SurabayaJS/website">MIT License</A>.
    </div>
  </footer>
)

export default Footer
