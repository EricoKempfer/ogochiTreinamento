import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Flex, Heading, HStack, Image, Input, Link, Stack, Box, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Checkbox } from "../components/ui/checkbox"
import { PasswordInput, PasswordStrengthMeter, } from "../components/ui/password-input"
import { FaF, FaGoogle } from "react-icons/fa6";
import { Separator, Spinner } from "@chakra-ui/react"
import { SiApple } from "react-icons/si";
import { Icon } from "@chakra-ui/react"
import Fimpagina from "../components/Fimpagina"
import { FaFacebook } from "react-icons/fa";
import { useRouter } from 'next/router'
import { toaster } from "../components/ui/toaster"
import axios from 'axios';
import jwt from 'jsonwebtoken'; // Add jwt import


export default function Home() {
  const [visible, setVisible] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const router = useRouter();
  

  
  useEffect(() => {
    setTimeout(() => setLoading(false), 4290); // Simulate loading time
  }, []);

  const handleLogin = async () => {
    try {
      console.log('Attempting login with:', { nome: usuario, senha }); // Add logging
      const response = await axios.post('http://localhost:3335/fornecedor/login', { nome: usuario, senha });
      console.log('Login response:', response.data); // Add logging
      if (response.data.type === 'success') {
        localStorage.setItem('token', response.data.token); // Store token
        const decoded = jwt.decode(response.data.token);
        if (decoded.cargo === 'admin') {
          await router.push('/admin'); // Navigate to admin page
        } else {
          alert('Você não tem permissão para acessar esta página');
        }
      } else {
        alert('Usuario ou senha incorretos');
      }
    } catch (error) {
      console.error('Login error:', error); // Add logging
      alert('Usuario ou senha incorretos');
    }
  };

  if (loading) {
    return (
      <Flex
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        bgColor="white"
        
      >
        <Image src="https://tenor.com/pt-BR/view/kiracord-soda-dringk-drink-gif-23787013.gif" alt="Loading..." background-color="red"/>
      </Flex>
    );
  }

  return (
    <div>
      <HStack
        w="100%"
        h="100vh"
        bgColor={"gray.800"}
      >
        <Flex
          w="180%"
          h="full"
        >
          <Image w={"full"} src="https://tenor.com/pt-BR/view/pepsi-pepsico-new-logo-soft-drink-cola-gif-1961380920692497371.gif" alt="Loading..." background-color="red"/>
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
            p={4}
          >
            <Image
              pb={5}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pepsi_logo_%282014%29.svg/800px-Pepsi_logo_%282014%29.svg.png"
              alt="Pepsi Logo"
              maxW={"250px"}
              w={"auto"}
              h={"auto"}

            />
            <Heading
              fontSize={"2xl"}
              color="white"
              fontWeight={600}
            >
              Acesse sua conta
            </Heading>
            <Text pb={1} color="whiteAlpha.500" fontSize={14}>Digite suas credenciais</Text>
            <FormControl pb={10} id="usuario" color={"white"}>
              <FormLabel pb={5}>Usuário</FormLabel>
              <Input
                borderColor="transparent"
                bgColor={"black"}
                placeholder="Seu usuário"
                _placeholder={{ color: "whiteAlpha.700" }}
                _focus={{ borderColor: "#004B93" }}
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </FormControl >
            <FormControl pb={5} id="senha" color={"white"}>
              <FormLabel pb={5}>Senha</FormLabel>
              <PasswordInput
                borderColor="transparent"
                bgColor={"black"}
                placeholder="Sua senha"
                _placeholder={{ color: "whiteAlpha.700" }}
                _focus={{ borderColor: "#004B93" }}
                visible={visible}
                onVisibleChange={setVisible}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Text color="whiteAlpha.500" fontSize={13} pl={0.4} pb={0}>Password is {visible ? "visible" : "hidden"}</Text>
            </FormControl>
            <Stack
              direction={"row"}
              align="start"
              justify={"space-between"}
              spacing={4}
              pb={15}
              pl={0.5}
            >
              <Checkbox colorPalette="blue" size="md" color={"white"}>Lembrar-me</Checkbox>
              <Link color="#004B93" fontWeight={700} fontSize={14} href="/recuperar-senha">Esqueci minha senha</Link>
            </Stack>
            <Button borderRadius={20} bgColor="#004B93" onClick={handleLogin}>Entrar</Button>
            <HStack pb={2} pt={2}>
              <Separator borderColor='whiteAlpha.700' />
              <Text flexShrink="0" color="whiteAlpha.700">OU</Text>
              <Separator borderColor='whiteAlpha.700' />
            </HStack>
            <Button
              borderRadius={20}
              bgColor="white"
              color="black"
              alignItems="center"
              justifyContent="center"
              gap={0} // Adds space between icon and text
              style={{ marginBottom: '10px' }}
            >
              <Icon fontSize="18px" style={{ marginLeft: '10px' }} >
                <FaGoogle />
              </Icon>
              <Text pl={0} style={{ marginLeft: '10px' }}>Entrar com o Google</Text>
            </Button>

            <Button
              borderRadius={20}
              bgColor="white"
              color="black"
              alignItems="center"
              justifyContent="center"
              gap={2} // Adds space between icon and text
              style={{ marginBottom: '10px' }}
            >
              <Icon fontSize="20px">
                <SiApple />
              </Icon>
              <Text>Entrar com a Apple</Text>
            </Button>

            <Button
              borderRadius={20}
              bgColor="white"
              color="black"
              alignItems="center"
              justifyContent="center"
              gap={1} // Adds space between icon and text
              style={{ marginBottom: '10px' }}
            >
              <Icon fontSize="20px">
                <FaFacebook />
              </Icon>
              <Text >Entrar com o Facebook</Text>
            </Button>

            <Flex pt={2} alignItems="center" justifyContent="center">
              <HStack>
                <Text color={"whiteAlpha.500"} >Não tem uma conta?</Text>
                <Link variant="underline" color={"blue.500"} href="/cadastro">Cadastre-se</Link>
              </HStack>
            </Flex>
          </Stack>
        </Flex>

      </HStack> {/* Close the HStack component properly */}
    </div>
  );
}
