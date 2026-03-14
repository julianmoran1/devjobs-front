import {Link as NavLink} from 'react-router'

const Link = ({ href, children, ...restOfProps }) => {
  return (
    <NavLink href={href} {...restOfProps} className='link'>
      {children}
    </NavLink>
  )
}

export default Link
