import Img from 'gatsby-image'
import React from 'react'

import A from '../components/ExtLink'

const IconList = ({
  imgs = [],
  meta = [],
  bordered = false,
  showText = false,
}) => {
  const mappedMeta = meta.edges.map(({ node }) => node)
  const imgClassNames = 'ba b--light-gray br-100'

  return (
    <div className="flex flex-wrap justify-center tc">
      {imgs.edges.map(({ node }, idx) => (
        <A
          key={node.id}
          href={mappedMeta[idx].url}
          className="hide-child ma4 w-10-l w-20"
        >
          <Img
            fluid={node.childImageSharp.fluid}
            className={bordered ? imgClassNames : ''}
          />
          <br />
          <small className={(showText ? '' : 'child') + ' dark-green'}>
            {mappedMeta[idx].name}
          </small>
        </A>
      ))}
    </div>
  )
}

export default IconList
