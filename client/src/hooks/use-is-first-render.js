import { useRef, useEffect } from 'react';

// This can be used to prevent useEffect from running on the first render
// of a component.
const useIsFirstRender = () => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return isFirstRender.current;
};

export default useIsFirstRender;
