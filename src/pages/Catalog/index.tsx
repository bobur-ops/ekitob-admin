import WithSideBar from "../../layouts/WithSideBar";
import { APP_ROUTES } from "../../config/routes";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Button, HStack, Spinner, Stack } from "@chakra-ui/react";
import BookItem from "../../components/BookItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../../config/types";

const BreadCrumbItems = [
  {
    link: APP_ROUTES.CATALOG,
    value: "Catalog",
  },
];

const Catalog = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/book");

      setBooks(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <WithSideBar>
      <HStack justifyContent={"space-between"} alignContent={"center"}>
        <BreadCrumbs items={BreadCrumbItems} />
        <Button as={Link} to={APP_ROUTES.ADD_BOOK}>
          Add new book
        </Button>
      </HStack>
      {loading ? (
        <Stack my={6}>
          <Spinner mx={"auto"} size={"xl"}></Spinner>
        </Stack>
      ) : null}
      {books.length ? (
        <Stack
          flexDirection={"row"}
          spacing={6}
          justifyContent={"flex-start"}
          pt={6}
          flexWrap={"wrap"}
        >
          {books.map((book) => (
            <Link key={book.id} to={`/catalog/${book.id}`}>
              <BookItem book={book} />
            </Link>
          ))}
        </Stack>
      ) : null}
    </WithSideBar>
  );
};

export default Catalog;
