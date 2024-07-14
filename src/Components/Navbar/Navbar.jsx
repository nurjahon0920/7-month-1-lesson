import { useContext } from "react";
import { MyFullContext } from "./../../MyContext";

const Navbar = () => {
  const data = useContext(MyFullContext);
  console.log(data);
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>List of Users</h1>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}>
        {data.map((val) => (
          <div key={val.id} className="card">
            {/* <h3>ID: {val.id}</h3> */}
            <p>Ismi: {val.firstname}</p>
            <p>Familiyasi: {val.lastname}</p>
            <h4>{val.age} yosh</h4>
            <p>Email: {val.email}</p>
            <p>Telefon raqami: {val.phone}</p>
            {/* <hr /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
