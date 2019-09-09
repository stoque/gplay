import styled from 'styled-components';

export const List = styled.ul`
  bottom: 40px;
  display: flex;
  height: 270px;
  left: 100px;
  position: absolute;
  transform: translate(${(props) => -240 * props.focusedItem}px, ${(props) => (props.isFocused ? '0' : '100px')});
  transition: transform 0.3s ease-in-out;
  z-index: 3;
`;

export const Item = styled.li`
  display: block;
  height: 100%;
  width: 200px;

  &:not(last-child) {
    margin-right: 40px;
  }
`;

export const Image = styled.img`
  height: inherit;
  object-fit: cover;
  width: inherit;
`;
