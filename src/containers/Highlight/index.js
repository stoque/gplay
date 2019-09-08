import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import useKeyPress from '../../hooks/use-key-press';
import key from '../../constants/keys-map';
import Button from '../../components/Button';

function Highlight({ isFocused, setFocusedSection }) {
  const upPress = useKeyPress(key.UP);
  const downPress = useKeyPress(key.DOWN);
  const rightPress = useKeyPress(key.RIGHT);
  const leftPress = useKeyPress(key.LEFT);
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    if (isFocused && rightPress) {
      setActiveButton((active) => (active === 0 || active === 1 ? active + 1 : active));
    }
  }, [rightPress, isFocused]);

  useEffect(() => {
    if (isFocused && leftPress) {
      setActiveButton((button) => {
        if (button === 1) {
          setActiveButton(0);
          setFocusedSection('navigation');
          return button;
        }
        return button - 1;
      });
    }
  }, [leftPress, isFocused, setFocusedSection]);

  useEffect(() => {
    if (isFocused && downPress) {
      setActiveButton(0);
      setFocusedSection('carousel');
    }
  }, [downPress, isFocused, setFocusedSection]);

  useEffect(() => {
    if (isFocused && upPress) {
      setActiveButton(1);
    }
  }, [upPress, isFocused]);

  return (
    <S.Highlight isFocused={isFocused}>
      <S.Background />
      <S.Title>
        The Handmaid's Tale
      </S.Title>

      <S.Description>
        Gilead tem um regime que trata mulheres como propriedade.
        Offred é uma das poucas mulheres férteis e serva do Comandante,
        buscando sobreviver e encontrar a filha que foi tirada dela.
      </S.Description>

      <S.Actions>
        <Button focused={activeButton === 1}>
          Assista
        </Button>
        <Button focused={activeButton === 2}>
          Veja mais
        </Button>
      </S.Actions>
    </S.Highlight>
  );
}

Highlight.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  setFocusedSection: PropTypes.func.isRequired,
};

export default Highlight;
