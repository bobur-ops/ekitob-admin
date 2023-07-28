import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import WithSideBar from "../../layouts/WithSideBar";
import { APP_ROUTES } from "../../config/routes";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Button, HStack, Spinner, Stack } from "@chakra-ui/react";
import BookItem from "../../components/BookItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const BreadCrumbItems = [
    {
        link: APP_ROUTES.CATALOG,
        value: "Catalog",
    },
];
const Catalog = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks();
    }, []);
    const getBooks = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/api/book");
            setBooks(response.data);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    return (_jsxs(WithSideBar, { children: [_jsxs(HStack, { justifyContent: "space-between", alignContent: "center", children: [_jsx(BreadCrumbs, { items: BreadCrumbItems }), _jsx(Button, { as: Link, to: APP_ROUTES.ADD_BOOK, children: "Add new book" })] }), loading ? (_jsx(Stack, { my: 6, children: _jsx(Spinner, { mx: "auto", size: "xl" }) })) : null, books.length ? (_jsx(Stack, { flexDirection: "row", spacing: 6, justifyContent: "flex-start", pt: 6, flexWrap: "wrap", children: books.map((book) => (_jsx(Link, { to: `/catalog/${book.id}`, children: _jsx(BookItem, { book: book }) }, book.id))) })) : null] }));
};
export default Catalog;
