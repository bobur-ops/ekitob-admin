import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Textarea,
  useNumberInput,
} from "@chakra-ui/react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { APP_ROUTES } from "../../config/routes";
import WithSideBar from "../../layouts/WithSideBar";
import UploadImage from "../../components/UploadImage";
import { useState } from "react";
import axios from "axios";
import { Book } from "../../config/types";
import { useNavigate } from "react-router-dom";

const BreadCrumbItems = [
  {
    link: APP_ROUTES.CATALOG,
    value: "Catalog",
  },
  {
    link: APP_ROUTES.ADD_BOOK,
    value: "Add Book",
  },
];

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <FormLabel fontSize={"sm"} fontWeight={"md"} color={"gray.700"}>
    {children}
  </FormLabel>
);

const AddBook = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [description, setDescription] = useState("");
  const [organization, setOrganization] = useState("");
  const [category, setCategory] = useState("");
  const [ageRestriction, setAgeRestriction] = useState<string | number>(16);
  const [pages, setPages] = useState<string | number>(0);
  const [isInSale, setIsInSale] = useState(false);

  const isFullData = () => {
    if (image && title && creator && description && organization && category) {
      return true;
    } else {
      return false;
    }
  };

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 16,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const submitBook = async () => {
    if (isFullData() === false) return;

    // if you need change the data
    const data: Omit<Book, "id"> = {
      author: creator,
      category,
      organization,
      ageRestriction: ageRestriction as number,
      date: new Date(),
      pages: parseInt(pages as string),
      name: title,
      description,
      icon: image as string,
      isInSell: isInSale,
      price: 15,
    };

    try {
      await axios.post("http://localhost:3000/api/book", data);

      navigate(APP_ROUTES.CATALOG);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WithSideBar>
      <BreadCrumbs items={BreadCrumbItems} />
      <Flex
        display={{ base: "block", md: "flex" }}
        alignItems={"center"}
        gap={10}
      >
        <Stack mx={"auto"}>
          <UploadImage
            uploadNewImage={(result) => {
              setImage(result);
            }}
            removeImage={() => setImage("")}
          />
        </Stack>
        <Stack spacing={6} w="full  ">
          <FormControl>
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label>Creator</Label>
            <Input
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
        </Stack>
      </Flex>
      <Flex gap={10} flexWrap={{ base: "wrap", md: "nowrap" }} mt={6}>
        <FormControl minW={250} w={"full"}>
          <Label>Organization</Label>
          <Input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </FormControl>
        <FormControl minW={250} w={"full"}>
          <Label>Category</Label>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mt={6}>
          <Label>Age Resctriction</Label>
          <HStack maxW="320px">
            <Button {...inc}>+</Button>
            <Input
              value={ageRestriction}
              onChange={(e) => setAgeRestriction(e.target.value)}
              {...input}
            />
            <Button {...dec}>-</Button>
          </HStack>
        </FormControl>
        <FormControl mt={6}>
          <Label>Pages</Label>
          <HStack maxW="320px">
            <NumberInput>
              <NumberInputField
                value={pages}
                onChange={(e) => setPages(e.target.value)}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </FormControl>
      </Flex>
      <Checkbox
        mt={6}
        colorScheme="green"
        checked={isInSale}
        onChange={(e) => setIsInSale(e.target.checked)}
      >
        Is in sale?
      </Checkbox>
      <Stack mt={6}>
        <Button onClick={submitBook} colorScheme="green">
          Upload book
        </Button>
      </Stack>
    </WithSideBar>
  );
};

export default AddBook;
