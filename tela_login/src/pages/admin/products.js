import { Box, HStack, Heading, Stack, Table, Flex } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../components/ui/pagination"


const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },

]
const products = () => {
  return (
      <Stack width="full"  bgColor={"#d4d4d8"} color={"black"} pl={20} pr={20} borderRadius={"10px"} >
        <Box
        borderRadius={"10px"}
          backgroundColor={"white"}
          p={10}>
          <Heading fontSize={30} marginBottom={5} >Lista de Produtos</Heading>
          <Table.Root  >
            <Table.Header  >
              <Table.Row backgroundColor="#a1a1aa"  >
              <Table.ColumnHeader borderRadius={"10px 0px 0px 0px"} color={"white"}>Id</Table.ColumnHeader>
                <Table.ColumnHeader color={"white"}>Tipo</Table.ColumnHeader>
                <Table.ColumnHeader color={"white"}>Nome</Table.ColumnHeader>
                <Table.ColumnHeader color={"white"} borderRadius={"0px 10px 0px 0px"}>Preço</Table.ColumnHeader>
              </Table.Row>
            </Table.Header >
            <Table.Body  >
              {items.map((item) => (
                <Table.Row key={item.id} bgColor={"transparent"}  >
                  <Table.Cell >{item.id}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.category}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            </Table.Root>
        </Box>
      </Stack>
  );
}

export default products;