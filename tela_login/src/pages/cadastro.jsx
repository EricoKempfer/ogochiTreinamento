import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Flex, Heading, HStack, Image, Input, Link, Stack, Box, Text, Field, Select } from "@chakra-ui/react";
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
import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from "../components/ui/select"

const cadastro = () => {
	
	const [invalid, setInvalid] = useState(false);
	const [visible, setVisible] = useState(false);

	const [usuario, setUsuario] = useState('');
	const [cpf, setCpf] = useState('');
	const [cargo, setCargo] = useState('');
	const [senha, setSenha] = useState('');

	const frameworks = createListCollection({
		items: [
			{ label: "Cliente", value: "cliente" },
			{ label: "Admin", value: "admin" },
		],
	})


	const handleCadastro = async () => {
		if (!cargo) {
			setInvalid(true);
			return;
		}
		try {
			const payload = { usuario, cpf, senha, cargo };
			console.log('Sending payload:', payload); // Add this line
			const response = await sendDataToAPI('/fornecedor', payload);
			console.log('Cadastro realizado com sucesso:', response);
		} catch (error) {
			console.error('Erro ao realizar cadastro:', error);
		}
	};

	return (
		<div>
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
					<FormControl pb={10} id="cargo" color={"white"} isInvalid={invalid && !cargo}>
						<FormLabel pb={5}>Cargo</FormLabel>
						
						<SelectRoot invalid={invalid && !cargo} errorText="Selecione um cargo" collection={frameworks} size="sm" width="320px">
							<SelectLabel >Select framework</SelectLabel>
							<SelectTrigger bgColor={"black"} >
								<SelectValueText color={"whiteAlpha.700"} placeholder="Selecione seu cargo" />
							</SelectTrigger>
							<SelectContent>
								{frameworks.items.map((movie) => (
									<SelectItem item={movie} key={movie.value}>
										{movie.label}
									</SelectItem>
								))}
							</SelectContent>
						</SelectRoot>
						
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
				</Stack>
			</Flex>
		</div>
	);
}

export default cadastro;