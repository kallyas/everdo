import React from "react";
import "./Note.css";

function Note({ title, body, color }) {
  const customStyle = {
    backgroundColor: color,
  };
  return (
    <div className="note" style={customStyle}>
      <div className="note__description">
        <h3 className="note__title">{title}</h3>
      </div>

      <hr className="note__divider" />
      <p className="note__body">{body}</p>
    </div>
  );
}

export default Note;
