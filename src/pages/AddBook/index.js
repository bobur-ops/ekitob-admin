import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Checkbox, Flex, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Textarea, useNumberInput, } from "@chakra-ui/react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { APP_ROUTES } from "../../config/routes";
import WithSideBar from "../../layouts/WithSideBar";
import UploadImage from "../../components/UploadImage";
import { useState } from "react";
import axios from "axios";
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
const Label = ({ children }) => (_jsx(FormLabel, { fontSize: "sm", fontWeight: "md", color: "gray.700", children: children }));
const AddBook = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [creator, setCreator] = useState("");
    const [description, setDescription] = useState("");
    const [organization, setOrganization] = useState("");
    const [category, setCategory] = useState("");
    const [ageRestriction, setAgeRestriction] = useState(16);
    const [pages, setPages] = useState(0);
    const [isInSale, setIsInSale] = useState(false);
    const isFullData = () => {
        if (image && title && creator && description && organization && category) {
            return true;
        }
        else {
            return false;
        }
    };
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: 1,
        defaultValue: 16,
    });
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();
    const submitBook = async () => {
        if (isFullData() === false)
            return;
        // if you need change the data
        const data = {
            author: creator,
            category,
            organization,
            ageRestriction: ageRestriction,
            date: new Date(),
            pages: parseInt(pages),
            name: title,
            description,
            icon: image,
            isInSell: isInSale,
            price: 15,
        };
        try {
            await axios.post("http://localhost:3000/api/book", data);
            navigate(APP_ROUTES.CATALOG);
        }
        catch (error) {
            console.log(error);
        }
    };
    return (_jsxs(WithSideBar, { children: [_jsx(BreadCrumbs, { items: BreadCrumbItems }), _jsxs(Flex, { display: { base: "block", md: "flex" }, alignItems: "center", gap: 10, children: [_jsx(Stack, { mx: "auto", children: _jsx(UploadImage, { uploadNewImage: (result) => {
                                setImage(result);
                            }, removeImage: () => setImage("") }) }), _jsxs(Stack, { spacing: 6, w: "full  ", children: [_jsxs(FormControl, { children: [_jsx(Label, { children: "Title" }), _jsx(Input, { value: title, onChange: (e) => setTitle(e.target.value) })] }), _jsxs(FormControl, { children: [_jsx(Label, { children: "Creator" }), _jsx(Input, { value: creator, onChange: (e) => setCreator(e.target.value) })] }), _jsxs(FormControl, { children: [_jsx(Label, { children: "Description" }), _jsx(Textarea, { value: description, onChange: (e) => setDescription(e.target.value) })] })] })] }), _jsxs(Flex, { gap: 10, flexWrap: { base: "wrap", md: "nowrap" }, mt: 6, children: [_jsxs(FormControl, { minW: 250, w: "full", children: [_jsx(Label, { children: "Organization" }), _jsx(Input, { value: organization, onChange: (e) => setOrganization(e.target.value) })] }), _jsxs(FormControl, { minW: 250, w: "full", children: [_jsx(Label, { children: "Category" }), _jsx(Input, { value: category, onChange: (e) => setCategory(e.target.value) })] })] }), _jsxs(Flex, { children: [_jsxs(FormControl, { mt: 6, children: [_jsx(Label, { children: "Age Resctriction" }), _jsxs(HStack, { maxW: "320px", children: [_jsx(Button, { ...inc, children: "+" }), _jsx(Input, { value: ageRestriction, onChange: (e) => setAgeRestriction(e.target.value), ...input }), _jsx(Button, { ...dec, children: "-" })] })] }), _jsxs(FormControl, { mt: 6, children: [_jsx(Label, { children: "Pages" }), _jsx(HStack, { maxW: "320px", children: _jsxs(NumberInput, { children: [_jsx(NumberInputField, { value: pages, onChange: (e) => setPages(e.target.value) }), _jsxs(NumberInputStepper, { children: [_jsx(NumberIncrementStepper, {}), _jsx(NumberDecrementStepper, {})] })] }) })] })] }), _jsx(Checkbox, { mt: 6, colorScheme: "green", checked: isInSale, onChange: (e) => setIsInSale(e.target.checked), children: "Is in sale?" }), _jsx(Stack, { mt: 6, children: _jsx(Button, { onClick: submitBook, colorScheme: "green", children: "Upload book" }) })] }));
};
export default AddBook;
