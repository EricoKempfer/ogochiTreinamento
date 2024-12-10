import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Flex, Heading, HStack, Input, Stack, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleSendCode = async () => {
    try {
      const response = await axios.post('http://localhost:3335/fornecedor/reset-password', { email });
      if (response.data.type === 'success') {
        setStep(2);
      } else {
        alert('Erro ao enviar código de recuperação');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      alert('Erro ao enviar código de recuperação');
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post('http://localhost:3335/fornecedor/verify-reset-code', { code, email });
      console.log('Verification response:', response.data); // Debugging line
      if (response.data.type === 'success') {
        setStep(3);
      } else {
        alert('Código de recuperação inválido');
      }
    } catch (error) {
      console.error('Code verification error:', error);
      alert('Código de recuperação inválido');
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.post('http://localhost:3335/fornecedor/update-password', { newPassword, email});
      if (response.data.type === 'success') {
        alert('Senha atualizada com sucesso');
        router.push('/');
      } else {
        alert('Erro ao atualizar senha');
      }
    } catch (error) {
      console.error('Password update error:', error);
      alert('Erro ao atualizar senha');
    }
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor={"gray.800"}
    >
      <Stack
        w="full"
        maxW="md"
        p={4}
        bgColor="white"
        borderRadius="md"
        boxShadow="md"
      >
        <Heading
          fontSize={"2xl"}
          color="black"
          fontWeight={600}
          textAlign="center"
        >
          Recuperar Senha
        </Heading>
        {step === 1 && (
          <>
            <FormControl id="email" pb={5}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button onClick={handleSendCode}>Enviar Código</Button>
          </>
        )}
        {step === 2 && (
          <>
            <FormControl id="code" pb={5}>
              <FormLabel>Código de Recuperação</FormLabel>
              <Input
                placeholder="Digite o código de 4 dígitos"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </FormControl>
            <Button onClick={handleVerifyCode}>Verificar Código</Button>
          </>
        )}
        {step === 3 && (
          <>
            <FormControl id="newPassword" pb={5}>
              <FormLabel>Nova Senha</FormLabel>
              <Input
                type="password"
                placeholder="Digite sua nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>
            <Button onClick={handleUpdatePassword}>Atualizar Senha</Button>
          </>
        )}
      </Stack>
    </Flex>
  );
}