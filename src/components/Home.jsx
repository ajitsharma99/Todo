import React, { useState } from "react";
import Todos from "./Todos";
import style from "./Home.module.css";
import NewTodo from "./NewTodo";
import {v4 as uuidv4} from "uuid"

const Home = () => {
const [todos, setTodos] = useState([]);

const handleAddTodo = (todo)=>{
  const id =  uuidv4();
  const newTodo = {...todo, id:id};
setTodos([...todos, newTodo])
}

  return (
    <div className={style.container}>
      <h1 style={{ color: "Black" }}>Todo App</h1>

      <NewTodo handleAddTodo={handleAddTodo}></NewTodo>

      <Todos todos={todos}></Todos>
    </div>
  );
};

export default Home;
