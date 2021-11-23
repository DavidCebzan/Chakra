import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React from "react";

function Addnote() {

    function handleSubmit(){
    
    }
    
    return <form onSubmit={handleSubmit}>
        <HStack p='3'>
            <Input variant='filled' placeholder="Don't forget"/>
            <Button type='submit' backgroundColor='#746c70' color='#ffffff'>Add note</Button>
        </HStack>
    </form>
}


export default Addnote