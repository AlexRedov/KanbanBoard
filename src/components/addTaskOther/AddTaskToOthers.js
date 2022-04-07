import React, { useState } from "react";
import AddButton from "../addButton";
import DropDown from "../dropDownMenu";

const AddTaskToOthers = ({ tasksToChoose, addTaskTo }) => {
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedId, setSelectedId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (selectedId !== "" && selectedId !== undefined) {
      addTaskTo(selectedId);
      setShowForm(false);
      setSelectedId("");
      setSelected(null);
    } else {
      document.querySelector(".add-task-dropdown").style.border =
        "2px solid red";
    }
  };

  return (
    <>
      {showForm && (
        <form className="add-task-form" onSubmit={onSubmit}>
          <DropDown
            tasksToChoose={tasksToChoose}
            selected={selected}
            setSelected={setSelected}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <input type="submit" value="Submit" className="btn btn--submit" />
        </form>
      )}
      {tasksToChoose && tasksToChoose.length > 0 ? (
        <>{!showForm && <AddButton setShowForm={setShowForm} />}</>
      ) : (
        <button className="btn btn--no-cards">No cards to add yet</button>
      )}
    </>
  );
};

export default AddTaskToOthers;
