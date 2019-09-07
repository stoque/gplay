import React, { useState } from 'react';

import Navigation from '../Navigation';
import Carousel from '../Carousel';
import Highlight from '../Highlight';

function App() {
  const [focusedSection, setFocusedSection] = useState('navigation');

  return (
    <div>
      <h1>Globoplay</h1>

      <Navigation
        isFocused={focusedSection === 'navigation'}
        setFocusedSection={setFocusedSection}
      />

      <Highlight
        isFocused={focusedSection === 'highlight'}
        setFocusedSection={setFocusedSection}
      />

      <Carousel
        isFocused={focusedSection === 'carousel'}
        setFocusedSection={setFocusedSection}
      />
    </div>
  );
}

export default App;
