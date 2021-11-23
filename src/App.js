import { Heading, VStack, IconButton } from "@chakra-ui/react";
import  Addnote  from "./components/Addnote";
import  Notelist  from "./components/Notelist";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

function App() {

  const notes = [
    {
      id: 1,
      body: "Learn Chakra",
      isDone: false,
    },
    {
      id: 2,
      body: "Learn Electron",
      isDone: false,
    },
  ];



  const [ getNotes, setNotes ] = useState(notes);


  function deleteNotes(id) {
    const newNotes = notes.filter((note) => (note.id !== id))
    setNotes(newNotes)
  }

  function setCompletedNotes(note) {
    note.isDone=true;
  }

  return (
    <VStack p={4}>
      <IconButton
        icon={<MdDarkMode />}
        alignSelf="start"                 
      ></IconButton>
      <Heading 
      bgGradient="linear(to-t, #647c90, #746c70)"
      fontWeight='extrabold'
      bgClip='text'
      >Notes App
      </Heading>
      <Notelist notes={getNotes} deleteNotes={deleteNotes} setCompletedNotes={setCompletedNotes}/>
      <Addnote/>
    </VStack>
  );
}

export default App;
