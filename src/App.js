import { Heading, VStack, IconButton } from "@chakra-ui/react";
import  Addnote  from "./components/Addnote";
import  Notelist  from "./components/Notelist";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function App() {
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
      <Addnote/>
      <Notelist />
    </VStack>
  );
}

export default App;
