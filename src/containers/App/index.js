import React, { useState } from 'react';

import Navigation from '../Navigation';
import Carousel from '../Carousel';
import Highlight from '../Highlight';

import Svgs from '../../components/Svgs';

import GlobalStyle from '../../styles/global';

function App() {
  const [focusedSection, setFocusedSection] = useState('highlight');

  return (
    <div>
      <GlobalStyle />
      <Svgs />

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
