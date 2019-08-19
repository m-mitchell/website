import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const Link = styled(GatsbyLink).attrs(({ className }) => ({
  className: `${className ? '' : 'dark-green'} dim link`,
}))``

export default Link
