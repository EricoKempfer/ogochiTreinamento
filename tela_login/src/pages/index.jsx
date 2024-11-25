import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, Heading, HStack, Image, Input, Stack,  } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <HStack
    w="100%"
    h="100vh"
    >
      <Flex
      w="full"
      h="full"
      >
        <Image
        w="full"
        h="full"
        objectFit="cover"
        src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/03/230327115255-embargoed-01-pepsi-new-logo-2023.webp "
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
        spacing={4}
        p={6}
        >
          <Heading
          fontSize={"2xl"}
          color="#000ddd"
          >
          Acesse sua conta  
          </Heading>
          <FormControl id="usuario">
            <FormLabel>Usuário</FormLabel>
            <Input placeholder="Seu usuário"/>
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input type="password"placeholder="Sua senha"/>
          </FormControl>
        </Stack>
      </Flex>
    </HStack>
  );
}
