import { useState, useEffect, useCallback } from 'react';

export default function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const keyDownHandler = useCallback(({ keyCode }) => {
    if (keyCode === targetKey) {
      setKeyPressed(true);
    }
  }, [targetKey]);

  const keyUpHandler = useCallback(({ keyCode }) => {
    if (keyCode === targetKey) {
      setKeyPressed(false);
    }
  }, [targetKey]);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, [keyDownHandler, keyUpHandler]);

  return keyPressed;
}
