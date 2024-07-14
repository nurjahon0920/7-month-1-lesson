import React, { createContext, useState } from "react";
export const MyFullContext = createContext();

const MyComponentPrividerCom = ({ children }) => {
  const [data, setData] = useState([
    {
      firstname: "Islom",
      lastname: "Karimov",
      email: "islom.karimov@example.com",
      phone: "+998901234567",
      id: 1,
      age: 45,
    },
    {
      firstname: "Dilshod",
      lastname: "Tursunov",
      email: "dilshod.tursunov@example.com",
      phone: "+998902345678",
      id: 2,
      age: 32,
    },
    {
      firstname: "Leyla",
      lastname: "Mammadova",
      email: "leyla.mammadova@example.com",
      phone: "+998903456789",
      id: 3,
      age: 28,
    },
    {
      firstname: "Rustam",
      lastname: "Ahmedov",
      email: "rustam.ahmedov@example.com",
      phone: "+998904567890",
      id: 4,
      age: 40,
    },
    {
      firstname: "Sanobar",
      lastname: "Rahmatova",
      email: "sanobar.rahmatova@example.com",
      phone: "+998905678901",
      id: 5,
      age: 35,
    },
    {
      firstname: "Jahongir",
      lastname: "Musayev",
      email: "jahongir.musayev@example.com",
      phone: "+998906789012",
      id: 6,
      age: 29,
    },
    {
      firstname: "Malika",
      lastname: "Yusupova",
      email: "malika.yusupova@example.com",
      phone: "+998907890123",
      id: 7,
      age: 31,
    },
    {
      firstname: "Sherzod",
      lastname: "Sharipov",
      email: "sherzod.sharipov@example.com",
      phone: "+998908901234",
      id: 8,
      age: 37,
    },
    {
      firstname: "Gulnora",
      lastname: "Ibragimova",
      email: "gulnora.ibragimova@example.com",
      phone: "+998909012345",
      id: 9,
      age: 34,
    },
    {
      firstname: "Rustam",
      lastname: "Yusufov",
      email: "rustam.yusufov@example.com",
      phone: "+998910123456",
      id: 10,
      age: 41,
    },
    {
      firstname: "Zamira",
      lastname: "Sultonova",
      email: "zamira.sultonova@example.com",
      phone: "+998911234567",
      id: 11,
      age: 27,
    },
    {
      firstname: "Akmal",
      lastname: "Jabbarov",
      email: "akmal.jabbarov@example.com",
      phone: "+998912345678",
      id: 12,
      age: 38,
    },
  ]);
  // const data =
  //   "data = data || {}; data = data || {}; data = data || {}; data = data || {}; data = data || {};";
  return (
    <MyFullContext.Provider value={[data, setData]}>
      {children}
    </MyFullContext.Provider>
  );
};

export default MyComponentPrividerCom;
