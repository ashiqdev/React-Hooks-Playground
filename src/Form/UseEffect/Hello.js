import React, { useEffect } from 'react';

export default function Hello() {
  useEffect(() => {
    console.log('render-hello');

    return () => {
      console.log('unmount');
    };
  }, []);
  return <div>Hello</div>;
}
