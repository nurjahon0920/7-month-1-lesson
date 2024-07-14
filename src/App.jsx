import React from "react";
import MyComponentPrividerCom from "./MyContext";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Cards/About";
const App = () => {
  return (
    <MyComponentPrividerCom>
      <Navbar />
      <About />
    </MyComponentPrividerCom>
  );
};

export default App;
