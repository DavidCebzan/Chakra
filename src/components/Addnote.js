import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import {useToast} from '@chakra-ui/react'
import { useState } from "react";
import React from "react";

function Addnote(props) {

const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault();
    

    if(!input) {
        toast({
            title: "No input was entered",
            status: 'error',
            duration: '2000',
            isClosable: true,
        })
        return
    }

    const note = {
        id: Math.random(),
        body: input,
        isDone: false,
    }

    props.addNotes(note);

    setInput('')
  }


  

  const [input, setInput] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack p="3">
        <Input
          variant="filled"
          placeholder="Don't forget"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" backgroundColor="#746c70" color="#ffffff">
          Add note
        </Button>
      </HStack>
    </form>
  );
}

export default Addnote;
