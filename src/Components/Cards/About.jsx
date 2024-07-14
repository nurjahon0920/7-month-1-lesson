import { useContext } from "react";
import { MyFullContext } from "../../MyContext";

const About = () => {
  const [data, setData] = useContext(MyFullContext);
  console.log(data);
  const onDelete = (id) => {
    let res = data.filter((item) => item.id !== id);
    setData(res);
  };
  return (
    <div>
      {/* {data.map((data) => (
        ))} */}
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
            <hr />
            <button onClick={() => onDelete(val.id)} className="delete">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
