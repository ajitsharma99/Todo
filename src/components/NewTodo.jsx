import React, { useState } from "react";
import style from "./newtodo.module.css";

const NewTodo = ({ handleAddTodo }) => {
    
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddTodo(todo);

    setTodo({
      title: "",
      desc: "",
    });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["from-field"]}>
        <label htmlFor="title"> Title</label>
        <input type="text" onChange={handleChange} value={title} name="title" />
      </div>

      <div className={style["from-field"]}>
        <label htmlFor="desc"> Description: </label>
        <textarea
          type="text"
          onChange={handleChange}
          value={desc}
          name="desc"
        />
      </div>

      <button type="submit"> Add Todo</button>
    </form>
  );
};

export default NewTodo;
