import styled from 'styled-components';

export const Highlight = styled.div`
  margin-left: 80px;
  padding: 100px;
  position: relative;
  z-index: ${(props) => (props.isFocused ? '2' : '0')};
`;

export const Background = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  height: 520px;
  width: 100%;
  z-index: -1;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg ,#000 ,rgba(0,0,0,.5) 10%, rgba(0,0,0,.1) 57%);
    bottom: 0;
  }
`;

export const Actions = styled.div`
  button:first-child {
    margin-right: 20px;
  }
`;
