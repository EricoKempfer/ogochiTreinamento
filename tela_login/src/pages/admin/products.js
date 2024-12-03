import { Box, HStack, Heading, Stack, Table, Flex, Text } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../components/ui/pagination"
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { IoIosAdd } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";

const products = () => {
  const [material, setMaterial] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const fetchData = async() => {
    try{
    const response = await axios.get('http://localhost:3335/material')
        if (Array.isArray(response.data)) {
          setMaterial(response.data);
        }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }

  const handleAddProduct = async (product) => {
    try {
      const response = await axios.post('http://localhost:3335/material', product);
      setMaterial([...material, response.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  useEffect(() => {
    fetchData();
  })

  return (
    <Stack width="full" bgColor={"#d4d4d8"} color={"black"} pl={20} pr={20} borderRadius={"10px"} >
      <Box
        borderRadius={"10px"}
        backgroundColor={"white"}
        p={10}>
        <Box  >
          <HStack >
            <Box justify="space-between" w="full">
              <HStack justify="space-between" w="full">
                <Heading fontSize={30} marginBottom={"3"} >Lista de Produtos</Heading>
                <IconButton marginBottom={"1"} textAlign="end" aria-label="Search database" variant="outline" borderRadius={10} >
                  <LuSearch />
                </IconButton>
              </HStack>
            </Box>
            <IconButton borderRadius={10} pl={2} marginBottom={"1"} textAlign="end" aria-label="Search database" variant="outline"  gap={0} >
            <FaSortAmountDown color="black"/>
              <Text color={"black"} marginRight={2}>Ordenar</Text>
            </IconButton>
            <IconButton borderRadius={10} p={2} marginBottom={"1"} textAlign="end" aria-label="Search database" variant="outline" border={"transparent"} bgColor={"green"} gap={0} >
              <MdOutlineAdd color="white" />
              <Text color={"white"} marginRight={2} onClick={() => setModalOpen(true)} >Adicionar Produto</Text>
            </IconButton>
            {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleAddProduct}
        />
      )}
          </HStack>
        </Box>
        <Table.Root  >
          <Table.Header  >
            <Table.Row backgroundColor="#004B93"  >
              <Table.ColumnHeader borderRadius={"10px 0px 0px 0px"} color={"white"}>Id</Table.ColumnHeader>
              <Table.ColumnHeader color={"white"}>Tipo</Table.ColumnHeader>
              <Table.ColumnHeader color={"white"}>Nome</Table.ColumnHeader>
              <Table.ColumnHeader color={"white"}>Preço</Table.ColumnHeader>
              <Table.ColumnHeader pl={8} color={"white"} borderRadius={"0px 10px 0px 0px"}>Ações</Table.ColumnHeader>
            </Table.Row>
          </Table.Header >
          <Table.Body  >
            {material.map((item) => (
              <Table.Row key={item.id} bgColor={"transparent"}  >
                <Table.Cell >{item.id}</Table.Cell>
                <Table.Cell>{item.tipo}</Table.Cell>
                <Table.Cell>{item.nome}</Table.Cell>
                <Table.Cell>{item.valor}</Table.Cell>
                <Table.Cell>
                {<IconButton size="xs" bgColor={"#004B93"} aria-label="Search database" marginRight={3}>
                  <MdEdit />
                </IconButton>}
                {<IconButton size="xs" bgColor={"red"} aria-label="Search database">
                  <FaRegTrashAlt />
                </IconButton>}
                </Table.Cell>
              </Table.Row>

            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Stack>
  );
}

export default products;


