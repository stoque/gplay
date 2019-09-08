/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.focused ? '#fff' : 'transparent')};
  font-size: 22px;
  color: ${(props) => (props.focused ? '#000' : '#bbb')};
  border-radius: 10px;
  width: 180px;
  padding: 16px 0;
  border: 2px solid ${(props) => (props.focused ? '#fff' : '#bbb')};
`;
