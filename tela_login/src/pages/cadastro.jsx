import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Flex, Heading, HStack, Image, Input, Link, Stack, Box, Text, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { Checkbox } from "../components/ui/checkbox"
import { PasswordInput } from "../components/ui/password-input"
import { FaF, FaGoogle } from "react-icons/fa6";
import { Separator } from "@chakra-ui/react"
import { SiApple } from "react-icons/si";
import { Icon } from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa";
import { sendDataToAPI } from '../utils/axios';
import { createListCollection } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { useRouter } from 'next/router'
import {
	NativeSelectField,
	NativeSelectRoot,
} from "../components/ui/native-select"
import Fimpagina from "../components/Fimpagina";

const cadastro = () => {

	const [invalid, setInvalid] = useState(false);
	const [visible, setVisible] = useState(false);

	const [usuario, setUsuario] = useState('');
	const [cpf, setCpf] = useState('');
	const [cargo, setCargo] = useState('');
	const [senha, setSenha] = useState('');
	const [email, setEmail] = useState('');
	const router = useRouter()


	const handleCadastro = async () => {
		if (!cargo) {
			setInvalid(true);
			return;
		}
		try {
			const payload = { usuario, email, cpf, senha, cargo };
			console.log('Sending payload:', payload); // Add this line
			const response = await sendDataToAPI('/fornecedor', payload);
			console.log('Cadastro realizado com sucesso:', response);
			router.push('http://localhost:3000')
		} catch (error) {
			console.error('Erro ao realizar cadastro:', error);
		}
	};

	return (
		<div>
			<HStack
				w="100%"
				h="97vh"
				bgColor={"gray.800"}
			>
				<Flex
					w="220%"
					h="full"
				>
					<Box
						bgRepeat={"no-repeat"}
						bgPos={"left"}
						bgImage="url(https://images6.alphacoders.com/491/491674.jpg)"
						p={5}
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
						Crie sua conta
					</Heading>
					<Text pb={3} color="whiteAlpha.500" fontSize={14}>Digite suas credenciais</Text>
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
					<FormControl pb={10} id="email" color={"white"}>
						<FormLabel pb={5}>Email</FormLabel>
						<Input
							borderColor="transparent"
							bgColor={"black"}
							placeholder="Seu email"
							_placeholder={{ color: "whiteAlpha.700" }}
							_focus={{ borderColor: "#004B93" }}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl >
					<FormControl pb={10} id="cpf" color={"white"}>
						<FormLabel pb={5}>Cpf</FormLabel>
						<Input
							borderColor="transparent"
							bgColor={"black"}
							placeholder="Seu cpf"
							_placeholder={{ color: "whiteAlpha.700" }}
							_focus={{ borderColor: "#004B93" }}
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
						/>
					</FormControl >
					<Field color={"white"} label="Cargo" >
						<NativeSelectRoot size="md">
							<NativeSelectField
								color={"whiteAlpha.700"}
								backgroundColor={"black"}
								_focus={{ borderColor: invalid && !cargo ? "red.500" : "#004B93" }} // Change border color if invalid
								placeholder="Selecione seu cargo"
								borderColor="transparent"
								onChange={(e) => {
									setCargo(e.target.value);
									if (e.target.value) setInvalid(false); // Reset invalid state if a value is selected
								}}
							>
								<option value="admin">Admin</option>
								<option value="cliente">Cliente</option>
							</NativeSelectField>
						</NativeSelectRoot>
						{invalid && !cargo && <Text fontSize={"12"} color="red.500">Selecione um cargo</Text>}
					</Field>
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
					</Stack>
					<Button borderRadius={20} bgColor="#004B93" onClick={handleCadastro}>Cadastre-se</Button>
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

					
				</Stack>
			</Flex>
			</HStack>
			<Fimpagina />
		</div>
	);
}

export default cadastro;