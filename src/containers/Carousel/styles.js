import styled from 'styled-components';

import InfoContent from '../../components/InfoContent';

export const Carousel = styled.div`
  height: 100%;
  margin-left: 80px;
  padding-left: 100px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${(props) => (props.isFocused ? '2' : '0')};

  &:after {
    bottom: 40px;
    content: '';
    display: ${(props) => (props.isFocused ? 'block' : 'none')};
    border: 2px solid #fff;
    border-radius: 2px;
    height: 270px;
    left: 100px;
    position: absolute;
    width: 200px;
    z-index: 3;
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => (props.isFocused ? props.backgroundImage : 'transparent')});
  background-color: #000;
  background-size: contain;
  height: 100%;
  position: absolute;
  transition: background-image 0.2s linear;
  width: 100%;
  z-index: ${(props) => (props.isFocused ? '-1' : '0')};

  &:after {
    background: linear-gradient(90deg ,#000 ,rgba(0,0,0,.5) 10%,rgba(0,0,0,.1) 57%);
    bottom: 0;
    content: '';
    height: 100%;
    left: 0%;
    position: absolute;
    width: 20%;
  }
`;

export const StyledInfoContent = styled(InfoContent)`
  display: ${(props) => (props.isFocused ? 'block' : 'none')};
  position: absolute;
  top: 100px;
`;
