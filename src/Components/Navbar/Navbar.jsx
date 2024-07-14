import { useContext } from "react";
import { MyFullContext } from "./../../MyContext";

const Navbar = () => {
  const [data, setData] = useContext(MyFullContext);
  // console.log(data);

  return (
    <>
      {/* <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        {() =>
          data.length > 1 ? `${data.length} users` : `${data.length} user`
        }
      </h1> */}
    </>
  );
};

export default Navbar;
