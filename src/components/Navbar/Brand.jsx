import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogtengDevLogo from '@/assets/lotengdev-logo.svg';

export function Brand({ url }) {
  return (
    <div className="pr-10 lg:border-r border-solid border-grey">
      <Link to={url}>
        <img className="h-7 lg:h-11" src={LogtengDevLogo} />
      </Link>
    </div>
  )
}

Brand.propTypes = {
  url: PropTypes.string.isRequired
}