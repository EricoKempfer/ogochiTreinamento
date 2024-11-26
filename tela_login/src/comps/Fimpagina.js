import { Center, Flex, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const fimpagina = () => {
    return (
        <div className="fimpagina">
            <HStack opacity={0.5}>
            <Text>©2024</Text>
            <Text> Pepsi </Text>
            <Flex alignItems="center" justifyContent="center" width="100%">
            <Link href="https://www.pepsico.com.br/politica-de-privacidade" isExternal>Política de Privacidade</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/termos-de-uso" isExternal>Termos de Uso</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/contato" isExternal>Contato</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/faq" isExternal>FAQ</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/ajuda" isExternal>Ajuda</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/seguranca" isExternal>Segurança</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/cookies" isExternal>Cookies</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/aviso-legal" isExternal>Aviso Legal</Link>
            <Text mx={2}>|</Text>
            <Link href="https://www.pepsico.com.br/acessibilidade" isExternal>Acessibilidade</Link>
            </Flex>
            </HStack>
        </div>
    );
}

export default fimpagina;