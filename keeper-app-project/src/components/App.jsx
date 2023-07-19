import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteToUpdate, setNoteToUpdate] = useState("");

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  useEffect(() => {
    console.log("notes changed-----wwwwww--", notes);
  }, [notes]);

  function handleDelete(index) {
    let newNote = notes.filter((elm, i) => {
      return i !== index;
    });
    setNotes(newNote);
  }

  function handleUpdate(index, note) {
    setNoteToUpdate({
      index: index,
      note: note
    });
  }

  function applyFinalUpdateToNote(note, index) {
    console.log("-----applyFinalUpdateToNote-------", note, index);
    let tempNotes = notes.map((elm, i) => {
      if (i === index) {
        return note;
      } else {
        return elm;
      }
    });
    console.log("-------tempNotes-1111111----", tempNotes);
    /*tempNotes[index] = note;
    console.log("------tempNotes------", tempNotes);
    setNotes([]);*/
    setNotes(tempNotes);
  }

  return (
    <div>
      <Header notes={notes} />
      <CreateArea
        handleAddNote={handleAddNote}
        noteToUpdate={noteToUpdate}
        applyFinalUpdateToNote={applyFinalUpdateToNote}
      />
      <Note
        notes={notes}
        key={1}
        title="Note title"
        content="Note content"
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <Footer />
    </div>
  );
}

export default App;
