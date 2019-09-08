import styled from 'styled-components';

import InfoContent from '../../components/InfoContent';

export const Carousel = styled.div`
  height: 100%;
  margin-left: 180px;
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
    left: 0;
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
  opacity: ${(props) => (props.isFocused ? '1' : '0')};
  position: absolute;
  transition: opacity 0.4s linear, background 0.2s linear;
  width: 100%;
  z-index: ${(props) => (props.isFocused ? '-1' : '0')};
`;

export const StyledInfoContent = styled(InfoContent)`
  display: ${(props) => (props.isFocused ? 'block' : 'none')};
  position: absolute;
  top: 100px;
`;

export const List = styled.ul`
  bottom: 40px;
  display: flex;
  height: 270px;
  left: 0;
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
