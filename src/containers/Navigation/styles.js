/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Navigation = styled.aside`
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
  z-index: 100;
`;
