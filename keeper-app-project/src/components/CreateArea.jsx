import React, { useEffect, useState } from "react";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [note, setNote] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    console.log("----changes reflected");
    setNote(`$(title) $(content)`);
  }, [title, content]);

  // useEffect(() => {
  //   console.log("received data for update", props?.noteToUpdate);
  // }, []);

  useEffect(() => {
    console.log("received request for updating note", props?.noteToUpdate);
    setInputTitle(props?.noteToUpdate?.note?.title);
    setInputContent(props?.noteToUpdate?.note?.content);
    if (props.noteToUpdate) {
      setIsUpdate(true);
    }
  }, [props.noteToUpdate]);

  const handleSetInputTitle = (event) => {
    setInputTitle(event.target.value);
  };

  const handleSetInputContent = (event) => {
    setInputContent(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    console.log("note present", isUpdate);
    if (!isUpdate) {
      props.handleAddNote({ title: inputTitle, content: inputContent });
    } else {
      props.applyFinalUpdateToNote(
        { title: inputTitle, content: inputContent },
        props?.noteToUpdate?.index
      );
      setIsUpdate(false);
    }

    setInputTitle("");
    setInputContent("");
    // setNote((prevNote) => {
    //   return [
    //     ...prevNote,
    //     {
    //       title: inputTitle,
    //       Content: inputContent
    //     }
    //   ];
    // });
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            handleSetInputTitle(e);
          }}
          value={inputTitle}
          placeholder="Title"
        />
        <textarea
          onChange={(e) => {
            handleSetInputContent(e);
          }}
          placeholder="Take a note..."
          rows="3"
          value={inputContent}
        />
        <button
          onClick={(note) => {
            addNote(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
