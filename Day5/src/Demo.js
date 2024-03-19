// import GrandChild  from "./GrandChild";
import React, { Suspense } from 'react';

const GrandChild = React.lazy(() => import('./GrandChild'));

function Demo() {
  return <div style={{ margin: "10px", border: "2px solid Green" }}>
    <h3>This is Child Component</h3>
    <hr />
    <Suspense fallback={<div>Loading...</div>}>     
      <GrandChild />
  </Suspense>
  </div>;
}

export default Demo;

