import { useContext } from "react";
import { MyFullContext } from "./../../MyContext";

const Navbar = () => {
  const [data, setData] = useContext(MyFullContext);
  // console.log(data);

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        There are {data.length} users
      </h1>
    </>
  );
};

export default Navbar;
