import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function NavList({ isFocused, items, focusedIndex }) {
  return (
    <S.Wrapper isFocused={isFocused}>
      <S.List>
        {items.map((item, index) => {
          const focusedItem = focusedIndex === index && isFocused;
          return (
            <S.Item key={item.text} focusedItem={focusedItem}>
              <S.StyledIcon name={item.icon} focusedItem={focusedItem} />
              {item.text}
            </S.Item>
          );
        })}
      </S.List>
    </S.Wrapper>
  );
}

NavList.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  focusedIndex: PropTypes.number.isRequired,
};

export default NavList;
