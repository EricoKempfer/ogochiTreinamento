import { Box, HStack, Flex, VStack, Icon } from "@chakra-ui/react";
import Fim from "../components/Fimpagina";
import Topopagina from "../components/Topopagina";
import { TbBrandPepsi } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <HStack w="100%" h="100vh">
        <Flex
          w="4%"
          h="100vh"
          direction="column" // Use column direction to stack icons vertically
          justify="space-between" // Push icons to the top and bottom
        >
          <Box bgColor="white" w="full" h="100vh">
            <Icon w={12} h={12} color={"#004B93"} marginLeft={3.5} marginTop={2}>
              <TbBrandPepsi />
            </Icon>
            <Icon w={10} h={10} color={"gray"} marginLeft={4.5} marginTop={10}>
              <AiOutlineProduct />
            </Icon>
            <Icon w={10} h={10} color={"gray"} marginLeft={4.5} marginTop={4}>
              <CgProfile />
            </Icon>
            <Icon w={10} h={10} color={"gray"} marginLeft={4.5} marginTop={4}>
              <MdOutlineAttachMoney />
            </Icon>
          </Box>
          {/* Move the Question Circle Icon to the bottom */}
          <Box bgColor="white" >
            <Icon w={10} h={10} color={"gray"} marginLeft={4.5} marginBottom={4}>
              <BsQuestionCircle />
            </Icon>
            <Icon w={10} h={10} color={"gray"} marginLeft={4.5} marginBottom={4}>
            <FaGear />
            </Icon>
          </Box>
        </Flex>
        <VStack w="96%" h="full" spacing={4}>
          <Topopagina />
          {children}
          <Fim />
        </VStack>
      </HStack>
    </div>
  );
};

export default Layout;