import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Flex, Heading, HStack, Image, Input, Link, Stack, Box,  } from "@chakra-ui/react";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  return (
    <HStack
    w="100%"
    h="100vh"
    bgColor={"black"}
    >
      <Flex
      w="200%"
      h="full"
      >
        <Box 
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        bgImage="url(https://images6.alphacoders.com/491/491674.jpg)" 
        w="full"
        h="full"
        bgSize="cover"
        />
      </Flex>
      <Flex
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      >
        <Stack
        w="full"
        maxW="md"
        p={6}
        >
          <Heading
          fontSize={"2xl"}
          color="#004B93"
          >
          Acesse sua conta  
          </Heading>
          <FormControl id="usuario" color={"white"}>
            <FormLabel>Usuário</FormLabel>
            <Input placeholder="Seu usuário"/>
          </FormControl>
          <FormControl id="senha" color={"white"}>
            <FormLabel>Senha</FormLabel>
            <Input type="password"placeholder="Sua senha"/>
          </FormControl>
          <Stack
          direction={"row"}
          align="start"
          justify={"space-between"}
          spacing={4}
          >
            <Checkbox colorPalette="blue" size="md" color={"white"}>Lembrar-me</Checkbox>
            <Link color="#004B93" fontWeight={700} fontSize={14}>Esqueci minha senha</Link>
          </Stack>
          <Button bgColor="#004B93">Entrar</Button>
        </Stack>
      </Flex>
    </HStack>
  );
}
