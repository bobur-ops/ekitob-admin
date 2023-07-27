import { Flex, Box, Image, useColorModeValue, Text } from "@chakra-ui/react";
import { Book } from "../config/types";

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      h={"full"}
    >
      <Box w={"full"} h={250}>
        <Image
          src={book.icon}
          alt={`Picture of ${book.name}`}
          roundedTop="lg"
          objectFit={"cover"}
          objectPosition={"center"}
          w="full"
          h="full"
        />
      </Box>

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {book.name}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="flex-end">
          <Text color={"gray.500"}>{book.description.slice(0, 100)}...</Text>
          <Box
            fontSize="2xl"
            height={"fit-content"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Box as="span" color={"gray.600"} fontSize="lg">
              £
            </Box>
            {book.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default BookItem;
