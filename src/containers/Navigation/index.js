import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useKeyPress from '../../hooks/use-key-press';
import key from '../../constants/keys-map';

const items = [
  { text: 'Busca' },
  { text: 'Início' },
  { text: 'Agora na Globo' },
  { text: 'Categorias' },
  { text: 'Minha Conta' },
];

function Navigation({ isFocused, setFocusedSection }) {
  const upPress = useKeyPress(key.UP);
  const downPress = useKeyPress(key.DOWN);
  const rightPress = useKeyPress(key.RIGHT);
  const [focusedIndex, setFocusedIndex] = useState(1);

  useEffect(() => {
    if (isFocused && upPress) {
      setFocusedIndex((index) => (index !== 0 ? index - 1 : index));
    }
  }, [upPress, isFocused]);

  useEffect(() => {
    if (isFocused && downPress) {
      setFocusedIndex((index) => (index < items.length - 1 ? index + 1 : index));
    }
  }, [downPress, isFocused]);

  useEffect(() => {
    if (isFocused && rightPress) {
      setFocusedSection('highlight');
    }
  }, [rightPress, isFocused, setFocusedSection]);

  return (
    <div className={isFocused ? 'focused' : ''}>
      <ul>
        {items.map((item, index) => (
          <li key={item.text} className={focusedIndex === index ? 'focused' : ''}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  setFocusedSection: PropTypes.func.isRequired,
};

export default Navigation;
