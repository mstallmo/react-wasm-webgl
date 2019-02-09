import React from "react";
import("../../pkg/webgl").catch(console.error);

const App = () => {
  return (
    <div>
      <h1>Hello there world!</h1>
      <canvas id={"canvas"} height={"150"} width={"150"} />
    </div>
  );
};

export default App;
