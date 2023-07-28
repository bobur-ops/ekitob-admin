import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue, Link, } from "@chakra-ui/react";
import { APP_ROUTES } from "../../config/routes";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Signin = () => {
    const [remember, setRemember] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submitSign = () => {
        if (login !== "admin" && password !== "admin123")
            return;
        if (remember) {
            localStorage.setItem("admin", JSON.stringify({ login: "admin", password: "admin123" }));
        }
        navigate(APP_ROUTES.DASHBOARD);
    };
    return (_jsx(Flex, { minH: "100vh", align: "center", justify: "center", bg: useColorModeValue("gray.50", "gray.800"), children: _jsxs(Stack, { spacing: 8, mx: "auto", maxW: "lg", py: 12, px: 6, children: [_jsxs(Stack, { align: "center", children: [_jsx(Heading, { fontSize: "4xl", children: "Sign in to your account" }), _jsxs(Text, { fontSize: "lg", color: "gray.600", children: ["to enjoy all of our cool ", _jsx(Text, { color: "blue.400", children: "features" }), " \u270C\uFE0F"] })] }), _jsx(Box, { rounded: "lg", bg: useColorModeValue("white", "gray.700"), boxShadow: "lg", p: 8, children: _jsxs(Stack, { spacing: 4, children: [_jsxs(FormControl, { id: "email", children: [_jsx(FormLabel, { children: "Login" }), _jsx(Input, { type: "email", value: login, onChange: (e) => setLogin(e.target.value) })] }), _jsxs(FormControl, { id: "password", children: [_jsx(FormLabel, { children: "Password" }), _jsx(Input, { type: "password", value: password, onChange: (e) => setPassword(e.target.value) })] }), _jsxs(Stack, { spacing: 10, children: [_jsxs(Stack, { direction: { base: "column", sm: "row" }, align: "start", justify: "space-between", children: [_jsx(Checkbox, { isChecked: remember, onChange: (e) => setRemember(e.target.checked), children: "Remember me" }), _jsx(Text, { color: "blue.400", children: "Forgot password?" })] }), _jsx(Button, { bg: "blue.400", color: "white", _hover: {
                                            bg: "blue.500",
                                        }, onClick: submitSign, children: "Sign in" })] }), _jsx(Stack, { pt: 6, children: _jsxs(Text, { align: "center", children: ["Not registered yet?", " ", _jsx(Link, { to: APP_ROUTES.SIGNUP, as: RouterLink, color: "blue.400", children: "Sign Up" })] }) })] }) })] }) }));
};
export default Signin;
