import styled from 'styled-components';

export const Highlight = styled.div`
  margin-left: 80px;
  padding: 100px;
  position: relative;
`;

export const Background = styled.div`
  background-image: url('https://s2.glbimg.com/tLFk1t7fxLB33dN86y1UmEVXJq0=/0x720/https://s2.glbimg.com/KLJ7D1bkx1WeNFSVrb2qzwcDH24=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/0/b/z6Bgz6SQi1xOlf4v2zVw/2019-370-midia-kit-series-handmaids-tale-s2-background.jpg');
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

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #bbb;
  font-size: 14px;
  margin-bottom: 40px;
  width: 300px;
`;

export const Actions = styled.div`
  button:first-child {
    margin-right: 20px;
  }
`;
