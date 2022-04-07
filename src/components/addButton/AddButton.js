import React from "react";

const AddButton = ({ setShowForm }) => {
  const onAdd = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <button className="btn btn-add-card" onClick={onAdd}>
      + Add card
    </button>
  );
};

export default AddButton;
