"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { APP_ROUTES } from "../../config/routes";
import { Link as RouterLink } from "react-router-dom";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (_jsx(Flex, { minH: "100vh", align: "center", justify: "center", bg: useColorModeValue("gray.50", "gray.800"), children: _jsxs(Stack, { spacing: 8, mx: "auto", maxW: "lg", py: 12, px: 6, children: [_jsxs(Stack, { align: "center", children: [_jsx(Heading, { fontSize: "4xl", textAlign: "center", children: "Sign up" }), _jsx(Text, { fontSize: "lg", color: "gray.600", children: "to enjoy all of our cool features \u270C\uFE0F" })] }), _jsx(Box, { rounded: "lg", bg: useColorModeValue("white", "gray.700"), boxShadow: "lg", p: 8, children: _jsxs(Stack, { spacing: 4, children: [_jsxs(HStack, { children: [_jsx(Box, { children: _jsxs(FormControl, { id: "firstName", isRequired: true, children: [_jsx(FormLabel, { children: "First Name" }), _jsx(Input, { type: "text" })] }) }), _jsx(Box, { children: _jsxs(FormControl, { id: "lastName", children: [_jsx(FormLabel, { children: "Last Name" }), _jsx(Input, { type: "text" })] }) })] }), _jsxs(FormControl, { id: "email", isRequired: true, children: [_jsx(FormLabel, { children: "Email address" }), _jsx(Input, { type: "email" })] }), _jsxs(FormControl, { id: "password", isRequired: true, children: [_jsx(FormLabel, { children: "Password" }), _jsxs(InputGroup, { children: [_jsx(Input, { type: showPassword ? "text" : "password" }), _jsx(InputRightElement, { h: "full", children: _jsx(Button, { variant: "ghost", onClick: () => setShowPassword((showPassword) => !showPassword), children: showPassword ? _jsx(ViewIcon, {}) : _jsx(ViewOffIcon, {}) }) })] })] }), _jsx(Stack, { spacing: 10, pt: 2, children: _jsx(Button, { loadingText: "Submitting", size: "lg", bg: "blue.400", color: "white", _hover: {
                                        bg: "blue.500",
                                    }, children: "Sign up" }) }), _jsx(Stack, { pt: 6, children: _jsxs(Text, { align: "center", children: ["Already a user?", " ", _jsx(Link, { to: APP_ROUTES.SIGNIN, as: RouterLink, color: "blue.400", children: "Login" })] }) })] }) })] }) }));
};
export default Signup;
