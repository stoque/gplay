import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function CarouselList({ focusedItem, isFocused, items }) {
  return (
    <S.List focusedItem={focusedItem} isFocused={isFocused}>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.Item key={index}>
          <S.Image src={`assets/images/${item.image}-thumb.jpg`} />
        </S.Item>
      ))}
    </S.List>
  );
}

CarouselList.propTypes = {
  focusedItem: PropTypes.number.isRequired,
  isFocused: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselList;
