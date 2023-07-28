import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import WithSideBar from "../../layouts/WithSideBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import { APP_ROUTES } from "../../config/routes";
import { useNavigate, useParams } from "react-router-dom";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Stack, Textarea, useDisclosure, } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import UploadImage from "../../components/UploadImage";
import axios from "axios";
const BookPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
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
            if (!book)
                return;
            const data = {
                ...book,
                icon: image,
                name,
                description,
                price: price,
            };
            const response = await axios.put(`http://localhost:3000/api/book/${id}`, data);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    };
    const getBook = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/api/book/${id}`);
            setBook(response.data);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    const deleteBook = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/book/${id}`);
            navigate(APP_ROUTES.CATALOG);
        }
        catch (error) {
            console.log(error);
        }
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);
    const format = (val) => `$` + val;
    const parse = (val) => val.replace(/^\$/, "");
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
    return (_jsxs(WithSideBar, { children: [_jsx(BreadCrumbs, { items: breadCrumbsItems }), loading ? (_jsx(Stack, { my: 10, children: _jsx(Spinner, { mx: "auto", size: "xl" }) })) : null, book && image ? (_jsxs(_Fragment, { children: [_jsxs(AlertDialog, { leastDestructiveRef: cancelRef, motionPreset: "slideInBottom", onClose: onClose, isOpen: isOpen, isCentered: true, children: [_jsx(AlertDialogOverlay, {}), _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { children: "Delete the book?" }), _jsx(AlertDialogCloseButton, {}), _jsx(AlertDialogBody, { children: "Are you sure you want to delete this book?" }), _jsxs(AlertDialogFooter, { children: [_jsx(Button, { ref: cancelRef, onClick: onClose, children: "No" }), _jsx(Button, { onClick: deleteBook, colorScheme: "red", ml: 3, children: "Yes" })] })] })] }), _jsxs(Stack, { py: 6, children: [_jsx(Stack, { maxW: "lg", mx: "auto", children: _jsx(UploadImage, { initialImage: image, uploadNewImage: (result) => setImage(result), removeImage: () => console.log("Remove image") }) }), _jsxs(Stack, { maxW: "container.md", mt: 6, spacing: 6, children: [_jsx(Input, { value: name, onChange: (e) => setName(e.target.value), bg: "gray.100", _focus: { background: "gray.50" } }), _jsx(Textarea, { value: description, onChange: (e) => setDescription(e.target.value), bg: "gray.100", _focus: { background: "gray.50" }, minH: 56 }), _jsxs(NumberInput, { onChange: (valueString) => setPrice(parse(valueString)), value: format(price), max: 50, w: "fit-content", children: [_jsx(NumberInputField, { bg: "gray.100", _focus: { background: "gray.50" } }), _jsxs(NumberInputStepper, { children: [_jsx(NumberIncrementStepper, {}), _jsx(NumberDecrementStepper, {})] })] })] }), _jsxs(Stack, { spacing: 6, mt: 6, children: [_jsx(Button, { w: "fit-content", colorScheme: "red", onClick: onOpen, children: "Delete the book" }), _jsx(Button, { onClick: submitChanges, w: "fit-content", children: "Save changes" })] })] })] })) : null] }));
};
export default BookPage;
