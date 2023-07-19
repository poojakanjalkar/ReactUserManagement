import React, { useEffect } from "react";

function Note(props) {
  function deleteNote(index) {
    props.handleDelete(index);
  }

  useEffect(() => {
    console.log("notes changed-------", props.notes);
  }, [props.notes]);

  return (
    <>
      {props.notes?.map((elm, index) => {
        return (
          <div className="note">
            <h1>{elm.title}</h1>
            <p>{elm.content}</p>
            <button
              onClick={() => {
                deleteNote(index);
              }}
            >
              DELETE
            </button>
            <button
              onClick={() => {
                props.handleUpdate(index, elm);
              }}
            >
              Update
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Note;
