import React from "react";
import xsign from "./xsign.png";
import { Link } from "react-router-dom";

const TaskPage = ({ task }) => {
  return (
    <section className="task-page">
      <div className="task-page__container">
        <h1 className="task-name">{task.name}</h1>
        <p className="task-description">{task.description}</p>
        <p className="task-date">Task was added {task.date}</p>
        <Link to="/">
          <img className="task-page__close-sign" src={xsign} />
        </Link>
      </div>
    </section>
  );
};

export default TaskPage;
