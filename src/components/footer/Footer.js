import React from "react";

const Footer = ({ activeAmount, finishedAmount }) => {
  return (
    <footer className="footer--color">
      <div className="footer container">
        <div className="footer__tasks">
          <p className="footer__task">Active tasks: {activeAmount}</p>
          <p className="footer__task">Finished tasks: {finishedAmount}</p>
        </div>
        <div className="footer__creater">
          Kanban Board by Alex Redov, 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
