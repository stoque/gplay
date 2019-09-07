import { useState, useEffect, useCallback } from 'react';

export default function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(({ keyCode }) => {
    if (keyCode === targetKey) {
      setKeyPressed(true);
    }
  }, [targetKey]);

  const upHandler = useCallback(({ keyCode }) => {
    if (keyCode === targetKey) {
      setKeyPressed(false);
    }
  }, [targetKey]);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
}
