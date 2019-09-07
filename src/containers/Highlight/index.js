import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useKeyPress from '../../hooks/use-key-press';
import key from '../../constants/keys-map';

function Highlight({ isFocused, setFocusedSection }) {
  const downPress = useKeyPress(key.DOWN);
  const rightPress = useKeyPress(key.RIGHT);
  const leftPress = useKeyPress(key.LEFT);
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    if (isFocused && rightPress) {
      setActiveButton((active) => (active === 0 || active === 1 ? active + 1 : active));
    }
  }, [rightPress, isFocused]);

  useEffect(() => {
    if (isFocused && leftPress) {
      setActiveButton((button) => {
        if (button === 1) {
          setFocusedSection('navigation');
          return button;
        }
        return button - 1;
      });
    }
  }, [leftPress, isFocused, setFocusedSection]);

  useEffect(() => {
    if (isFocused && downPress) {
      setFocusedSection('carousel');
    }
  }, [downPress, isFocused, setFocusedSection]);

  return (
    <div className={isFocused ? 'focused' : ''}>
      <h1>Highlight</h1>
      <button type="button" className={activeButton === 1 ? 'focused' : ''}>Assista</button>
      <button type="button" className={activeButton === 2 ? 'focused' : ''}>Veja Mais</button>
    </div>
  );
}

Highlight.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  setFocusedSection: PropTypes.func.isRequired,
};

export default Highlight;
