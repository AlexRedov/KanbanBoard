import React, { useState, useContext } from "react";
import AddButtonBacklog from "../addButtonBacklog";
import { AppContext } from "../main/Main";

const AddTaskToBacklogForm = () => {
  const { addTaskBacklog } = useContext(AppContext);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    /* Validation input */
    if (!name) {
      document.querySelector(".add-task-form__input--name").style.border =
        "2px red solid";
      if (!description) {
        document.querySelector(
          ".add-task-form__input--description"
        ).style.border = "2px red solid";
      }
      return;
    }

    if (!description) {
      document.querySelector(
        ".add-task-form__input--description"
      ).style.border = "2px red solid";
      if (!name) {
        document.querySelector(".add-task-form__input--name").style.border =
          "2px red solid";
      }
      return;
    }

    const id = Math.floor(Math.random() * 10000) + 1;
    const date = new Date();
    addTaskBacklog({ id, date: date.toLocaleString(), name, description });

    setName("");
    setDescription("");

    setShowForm(false);
  };

  return (
    <>
      {showForm ? (
        <form className="add-task-form" onBlur={onSubmit} onSubmit={onSubmit}>
          <h3 className="add-task-title">Add Task:</h3>
          <input
            className="add-task-form__input add-task-form__input--name"
            type="text"
            placeholder="Type name of a task"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() =>
              (document.querySelector(
                ".add-task-form__input--name"
              ).style.border = "1px solid #0079bf")
            }
          />
          <input
            className="add-task-form__input add-task-form__input--description"
            type="text"
            placeholder="Type description of a task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() =>
              (document.querySelector(
                ".add-task-form__input--description"
              ).style.border = "1px solid #0079bf")
            }
          />
          <input type="submit" value="Submit" className="btn btn--submit" />
        </form>
      ) : (
        <AddButtonBacklog setShowForm={setShowForm} />
      )}
    </>
  );
};

export default AddTaskToBacklogForm;
