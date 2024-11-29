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

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 139.99 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },

]
const products = () => {
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
                <IconButton marginBottom={"1"} textAlign="end" aria-label="Search database" variant="outline" >
                  <LuSearch />
                </IconButton>
              </HStack>
            </Box>
            <IconButton borderRadius={10} p={2} marginBottom={"1"} textAlign="end" aria-label="Search database" variant="outline" border={"transparent"} bgColor={"green"} gap={0} >
              <MdOutlineAdd color="white" />
              <Text color={"white"} marginRight={2}>Adicionar Produto</Text>
            </IconButton>
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
            {items.map((item) => (
              <Table.Row key={item.id} bgColor={"transparent"}  >
                <Table.Cell >{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
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