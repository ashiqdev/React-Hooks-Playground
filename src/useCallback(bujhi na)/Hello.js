import React, { useRef, useMemo } from 'react';
import { useCountRenders } from './useCountRenders';

// export default function Hello({ increment }) {
//   return <button onClick={increment}>Hello</button>;
// }

// React.memo compares the props
// if props have changed, then only its going to re-render the component
// by default React always re-render the component (if parent rendering, child also render)
export const Hello = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={increment}>Hello</button>;
});