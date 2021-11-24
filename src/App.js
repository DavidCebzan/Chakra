import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import  Addnote  from "./components/Addnote";
import  Notelist  from "./components/Notelist";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

function App() {

  const initialNotes = [
    {
      id: 0,
      body: "Learn Chakra",
      isDone: false,
    },
    {
      id: 1,
      body: "Learn Electron",
      isDone: false,
    },
  ];



  const [ getNotes, setNotes ] = useState(initialNotes);



  function deleteNotes(id) {
    const newNotes = getNotes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }


  function setCompletedNotes(id) {
     let index = getNotes.findIndex(x => x.id === id)
     let newNotes = [...getNotes];
     
     if(newNotes[index].isDone === true) {
      newNotes[index].isDone = false;
     }
     else{
       
       newNotes[index].isDone = true;
     }

     setNotes(newNotes)
     
  }

  function addNotes(note) {
    setNotes([...getNotes,note])
  }
 

  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <MdDarkMode /> : <MdOutlineDarkMode/>}
        alignSelf="start"
        onClick={toggleColorMode}                 
      ></IconButton>
      <Heading 
      bgGradient="linear(to-t, #647c90, #746c70)"
      fontWeight='extrabold'
      bgClip='text'
      >Notes App
      </Heading>
      <Notelist notes={getNotes} deleteNotes={deleteNotes} setCompletedNotes={setCompletedNotes}/>
      <Addnote addNotes={addNotes} />
    </VStack>
  );
}

export default App;
