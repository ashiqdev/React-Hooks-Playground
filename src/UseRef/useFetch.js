import React, { useEffect, useState, useRef } from 'react';

export default function useFetch(url) {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: state.data, loading: true });
    // whenever the url changes/updates, the function will be called
    fetch(url)
      .then(x => x.json())
      .then(y => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, setState]);

  return state;
}
