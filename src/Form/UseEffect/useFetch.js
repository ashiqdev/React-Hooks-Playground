import React, { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: state.data, loading: true });
    // whenever the url changes/updates, the function will be called
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);

  return state;
}
