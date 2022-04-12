import React from "react";
import AddTaskToBacklogForm from "../addTaskBacklogForm";
import AddTaskToOthers from "../addTaskOther";
import { Link } from "react-router-dom";

const TaskContainer = ({ title, children, tasksToChoose, addTaskTo }) => {
  return (
    <div className="task-container">
      <h2 className="task-container__title">{title}</h2>
      <div className="tasks-and-form-wrapper">
        {children && children.length > 0 && (
          <ul className="tasks">
            {children.map((task) => {
              return (
                <Link key={task.id} className="task" to={`tasks/${task.id}`}>
                  <li>{task.name}</li>
                </Link>
              );
            })}
          </ul>
        )}
        {title === "Backlog" ? (
          <AddTaskToBacklogForm />
        ) : (
          <AddTaskToOthers
            tasksToChoose={tasksToChoose}
            addTaskTo={addTaskTo}
          />
        )}
      </div>
    </div>
  );
};

export default TaskContainer;
