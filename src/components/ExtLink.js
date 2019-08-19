import styled from 'styled-components'

const ExtLink = styled.a.attrs(({ className, dark = false, ext = true }) => ({
  className: `${className ? '' : dark ? 'light-green' : 'dark-green'} dim link`,
  rel: ext ? 'noopener noreferrer' : '',
  target: ext ? '_blank' : '',
}))``

export default ExtLink
