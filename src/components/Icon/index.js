import React from 'react';
import PropTypes from 'prop-types';

function Icon({ name, className }) {
  return (
    <svg className={className}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
