import React from "react";

const AddButtonBacklog = ({ setShowForm }) => {
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

export default AddButtonBacklog;
