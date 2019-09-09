import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import useKeyPress from '../../hooks/use-key-press';
import key from '../../constants/keys-map';
import CarouselList from '../../components/CarouselList';

const items = [
  {
    title: 'The Good Doctor - O Bom Doutor',
    description: 'Um jovem médico com autismo começa a trabalhar em um famoso hospital. Além dos desafios da profissão, ele terá também que provar sua capacidade a seus colegas e superiores.',
    image: 'good-doctor',
  },
  {
    title: 'Ice',
    description: 'Uma família dona de empresa de diamantes em Los Angeles se vê em apuros quando um dos herdeiros mata um traficante do ramo, fica em perigo e coloca em risco o próprio negócio.',
    image: 'ice',
  },
  {
    title: 'The Good Doctor - O Bom Doutor',
    description: 'Um jovem médico com autismo começa a trabalhar em um famoso hospital. Além dos desafios da profissão, ele terá também que provar sua capacidade a seus colegas e superiores.',
    image: 'good-doctor',
  },
  {
    title: 'Ice',
    description: 'Uma família dona de empresa de diamantes em Los Angeles se vê em apuros quando um dos herdeiros mata um traficante do ramo, fica em perigo e coloca em risco o próprio negócio.',
    image: 'ice',
  },
];

function Carousel({ isFocused, setFocusedSection }) {
  const upPress = useKeyPress(key.UP);
  const rightPress = useKeyPress(key.RIGHT);
  const leftPress = useKeyPress(key.LEFT);
  const [focusedItem, setFocusedItem] = useState(0);

  useEffect(() => {
    if (isFocused && upPress) {
      setFocusedSection('highlight');
    }
  }, [upPress, isFocused, setFocusedSection]);

  useEffect(() => {
    if (isFocused && leftPress) {
      setFocusedItem((i) => {
        if (i === 0) {
          setFocusedSection('navigation');
          return i;
        }
        return i - 1;
      });
    }
  }, [leftPress, isFocused, setFocusedSection]);

  useEffect(() => {
    if (isFocused && rightPress) {
      setFocusedItem((i) => (i < items.length - 1 ? i + 1 : i));
    }
  }, [rightPress, isFocused]);

  return (
    <S.Carousel isFocused={isFocused}>
      <S.Background
        isFocused={isFocused}
        backgroundImage={`assets/images/${items[focusedItem].image}-background.jpg`}
      />

      <S.StyledInfoContent
        isFocused={isFocused}
        title={items[focusedItem].title}
        description={items[focusedItem].description}
      />

      <CarouselList
        isFocused={isFocused}
        focusedItem={focusedItem}
        items={items}
      />
    </S.Carousel>
  );
}

Carousel.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  setFocusedSection: PropTypes.func.isRequired,
};

export default Carousel;
