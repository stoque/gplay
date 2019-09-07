import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useKeyPress from '../../hooks/use-key-press';
import key from '../../constants/keys-map';

const items = [
  { text: 'BBB' },
  { text: 'BBB' },
  { text: 'BBB' },
  { text: 'BBB' },
  { text: 'BBB' },
];

function Carousel({ isFocused, setFocusedSection }) {
  const upPress = useKeyPress(key.UP);
  const rightPress = useKeyPress(key.RIGHT);
  const leftPress = useKeyPress(key.LEFT);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (isFocused && upPress) {
      setFocusedSection('highlight');
    }
  }, [upPress, isFocused, setFocusedSection]);

  useEffect(() => {
    if (isFocused && leftPress) {
      setFocusedIndex((i) => {
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
      setFocusedIndex((i) => (i < items.length - 1 ? i + 1 : i));
    }
  }, [rightPress, isFocused]);

  return (
    <div className={isFocused ? 'focused' : ''}>
      <ul style={{ display: 'flex' }}>
        {items.map((item, index) => (
          <li key={index} className={focusedIndex === index ? 'focused' : ''}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

Carousel.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  setFocusedSection: PropTypes.func.isRequired,
};

export default Carousel;
