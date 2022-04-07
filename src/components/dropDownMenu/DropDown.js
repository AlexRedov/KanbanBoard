import React, { useState } from "react";

const DropDown = ({
  tasksToChoose,
  selected,
  setSelected,
  selectedId,
  setSelectedId,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (e) => {
    setSelected(e.target.dataset.name);
    setSelectedId(e.target.dataset.id);
    setShowOptions(false);
    document.querySelector(".add-task-dropdown").style.border =
      "1px #0079bf solid";
  };

  return (
    <div className="add-task-dropdown__wrapper">
      <div className="add-task-dropdown" onClick={handleClick}>
        <span data-id={selectedId}>{selected || "Select a task"}</span>
      </div>
      {showOptions && (
        <ul className="add-task-dropdown__options">
          {tasksToChoose.map((task) => (
            <li
              className="add-task-dropdown__options-option"
              key={task.id}
              data-id={task.id}
              data-name={task.name}
              onClick={handleOptionClick}
            >
              {task.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
