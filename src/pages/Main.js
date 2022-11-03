import React from "react";
import { GlobalUserContetx } from "../Context/UserContext";
import Contact from "./Contact";
import Todo from "./Todo";

const Main = () => {
  const { UserLogin } = GlobalUserContetx();
  return <div>{UserLogin ? <Todo /> : <Contact />}</div>;
};

export default Main;
