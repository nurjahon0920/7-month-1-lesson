import React from "react";
import MyComponentPrividerCom from "./MyContext";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Cards/About";
import MyLastContextProCom from "./MyLastContext";
const App = () => {
  return (
    <MyComponentPrividerCom>
      <MyLastContextProCom>
        <Navbar />
        <About />
      </MyLastContextProCom>
    </MyComponentPrividerCom>
  );
};

export default App;
