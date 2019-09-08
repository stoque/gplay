import styled from 'styled-components';

import Icon from '../Icon';

export const Wrapper = styled.aside`
  align-items: center;
  background: #000;
  border-right: 1px solid #111;
  color: #fff;
  height: 100%;
  display: flex;
  left: 0;
  overflow: hidden;
  position: fixed;
  transition: width 0.3s ease-in-out;
  width: ${(props) => (props.isFocused ? '250px' : '100px')};
  z-index: 2;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;

export const StyledIcon = styled(Icon)`
  fill: ${(props) => (props.focusedItem ? '#000' : '#bdc3c7')};
  height: 18px;
  margin-right: 42px;
  min-width: 18px;
  width: 18px;
  transition: fill 0.2s linear;
`;

export const Item = styled.li`
  align-items: center;
  background-color: ${(props) => (props.focusedItem ? '#fff' : 'transparent')};
  color: ${(props) => (props.focusedItem ? '#000' : '#bdc3c7')};
  display: flex;
  height: 60px;
  overflow: hidden;
  padding: 0 40px;
  transition: background-color 0.2s linear, color 0.2s linear;
  white-space: nowrap
  width: 100%;
`;

export const Text = styled.span`
  font-size: 16px;
`;
