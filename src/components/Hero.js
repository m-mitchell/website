import React from 'react'

const Hero = ({ className, outerClassName, ...props }) => (
  <div className={'pa4 ' + outerClassName}>
    <div className={'mw8 ml-auto mr-auto ' + className} {...props} />
  </div>
)

export default Hero
