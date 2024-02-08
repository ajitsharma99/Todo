import React from "react";
import { MdDelete } from "react-icons/md";
import './icons.css';
import style from './todo.module.css'

const Todo = (props) => {
  const { title, id, desc } = props.todo;

  return (
    <article className={style.todo}>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button className={style.btn}>
        <MdDelete className="icons" />
      </button>
    </article>
  );
};

export default Todo;
