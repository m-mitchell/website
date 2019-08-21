import cns from '@sindresorhus/class-names'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ExtLink = styled.a.attrs(
  ({ className, dark = false, ext = true, noDim = false }) => ({
    className: cns(
      className ? '' : dark ? 'light-green' : 'dark-green',
      { dim: !noDim },
      'link'
    ),
    rel: ext ? 'noopener noreferrer' : '',
    target: ext ? '_blank' : '',
  })
)``

ExtLink.propTypes = {
  dark: PropTypes.bool,
  ext: PropTypes.bool,
  noDim: PropTypes.bool,
}

export default ExtLink
