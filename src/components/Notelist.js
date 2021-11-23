import React from "react";
import { VStack, HStack, Text, IconButton } from "@chakra-ui/react";
import { IoMdDoneAll } from "react-icons/io";

function Notelist() {
  const notes = [
    {
      id: 1,
      body: "Learn Chakra",
    },
    {
      id: 2,
      body: "Learn Electron",
    },
  ];

  return (
    <VStack>
      {notes.map((note) => (
        <HStack>
            <Text>{note.body}</Text>
            <IconButton icon={<IoMdDoneAll />}></IconButton>
        </HStack>
      ))}
    </VStack>
  );
}

export default Notelist;
