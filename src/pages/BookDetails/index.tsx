import WithSideBar from "../../layouts/WithSideBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import { APP_ROUTES } from "../../config/routes";
import { useNavigate, useParams } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import UploadImage from "../../components/UploadImage";
import axios from "axios";
import { Book } from "../../config/types";

const BookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<null | Book>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState<string | number>("");

  useEffect(() => {
    getBook();
  }, []);

  useEffect(() => {
    if (book) {
      setImage(book.icon);
      setName(book.name);
      setDescription(book.description);
      setPrice(book.price);
    }
  }, [book]);

  const submitChanges = async () => {
    try {
      if (!book) return;
      const data: Book = {
        ...book,
        icon: image as string,
        name,
        description,
        price: price as number,
      };
      const response = await axios.put(
        `http://localhost:3000/api/book/${id}`,
        data
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getBook = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Book>(
        `http://localhost:3000/api/book/${id}`
      );
      setBook(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const deleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/book/${id}`);

      navigate(APP_ROUTES.CATALOG);
    } catch (error) {
      console.log(error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const format = (val: number) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  const breadCrumbsItems = [
    {
      link: APP_ROUTES.CATALOG,
      value: "Catalog",
    },
    {
      link: `${APP_ROUTES.CATALOG}/${id}`,
      value: "Book Details",
    },
  ];

  return (
    <WithSideBar>
      <BreadCrumbs items={breadCrumbsItems} />
      {loading ? (
        <Stack my={10}>
          <Spinner mx={"auto"} size={"xl"} />
        </Stack>
      ) : null}
      {book && image ? (
        <>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            motionPreset="slideInBottom"
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogHeader>Delete the book?</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Are you sure you want to delete this book?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button onClick={deleteBook} colorScheme="red" ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Stack py={6}>
            <Stack maxW={"lg"} mx={"auto"}>
              <UploadImage
                initialImage={image}
                uploadNewImage={(result) => setImage(result)}
                removeImage={() => console.log("Remove image")}
              />
            </Stack>
            <Stack maxW={"container.md"} mt={6} spacing={6}>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg={"gray.100"}
                _focus={{ background: "gray.50" }}
              />
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                bg={"gray.100"}
                _focus={{ background: "gray.50" }}
                minH={56}
              />
              <NumberInput
                onChange={(valueString) => setPrice(parse(valueString))}
                value={format(price as number)}
                max={50}
                w={"fit-content"}
              >
                <NumberInputField
                  bg={"gray.100"}
                  _focus={{ background: "gray.50" }}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Stack>
            <Stack spacing={6} mt={6}>
              <Button w={"fit-content"} colorScheme="red" onClick={onOpen}>
                Delete the book
              </Button>
              <Button onClick={submitChanges} w={"fit-content"}>
                Save changes
              </Button>
            </Stack>
          </Stack>
        </>
      ) : null}
    </WithSideBar>
  );
};

export default BookPage;
