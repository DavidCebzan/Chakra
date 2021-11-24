import React from "react";
import { useState } from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { IoMdDoneAll } from "react-icons/io";

function Notelist({ notes, deleteNotes, setCompletedNotes }) {
  if (!notes.length) {
    return (
      <Badge colorScheme="#647c90" borderRadius="lg" p="4" m="4">
        There are no Notes
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="#647c90"
      borderWidth="1px"
      p="4"
      borderRadius="lg"
      width="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {notes.map((note) => (
        <HStack key={note.id}>
          <Text decoration={!note.isDone ? "" : "line-through"}>
            {note.body}
          </Text>
          <Spacer />
          <IconButton
            icon={<IoMdDoneAll />}
            onClick={() => setCompletedNotes(note.id)}
            onDoubleClick={() => deleteNotes(note.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
}

export default Notelist;
