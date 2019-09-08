import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function InfoContent({ className, title, description }) {
  return (
    <S.Wrapper className={className}>
      <S.Title>
        {title}
      </S.Title>

      <S.Description>
        {description}
      </S.Description>
    </S.Wrapper>
  );
}

InfoContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

InfoContent.defaultProps = {
  className: '',
};

export default InfoContent;
