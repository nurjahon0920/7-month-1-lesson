import React from "react";
import MyComponentPrividerCom from "./MyContext";
import Navbar from "./Components/Navbar/Navbar";
// import Main from "./Components/Main";
const App = () => {
  return (
    <MyComponentPrividerCom>
      <Navbar />
      {/* <Main /> */}
    </MyComponentPrividerCom>
  );
};

export default App;
