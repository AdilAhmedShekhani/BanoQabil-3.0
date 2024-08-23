//Using memo the component only render one time

import { memo } from "react";

function Child({getData}) {
  console.log(getData())
  console.log("Child Render");
  return (
    <div>
      <h1>Child component</h1>
    </div>
  );
}

export default memo(Child);
