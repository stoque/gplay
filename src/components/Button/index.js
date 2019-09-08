import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Button({
  children, className, focused, type,
}) {
  return (
    <S.Button type={type} className={className} focused={focused}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  focused: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  focused: false,
  type: 'button',
};

export default Button;
