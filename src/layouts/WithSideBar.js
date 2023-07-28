"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton, Box, CloseButton, Flex, Icon, useColorModeValue, Text, Drawer, DrawerContent, useDisclosure, } from "@chakra-ui/react";
import { FiHome, FiMenu, FiUsers } from "react-icons/fi";
import { GrCatalog } from "react-icons/gr";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../config/routes";
const LinkItems = [
    { name: "Home", icon: FiHome, link: APP_ROUTES.DASHBOARD },
    { name: "Catalog", icon: GrCatalog, link: APP_ROUTES.CATALOG },
    { name: "Users", icon: FiUsers, link: APP_ROUTES.USERS },
];
const WithSideBar = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem("admin"));
        if (!admin) {
            navigate(APP_ROUTES.SIGNIN);
        }
    }, []);
    return (_jsxs(Box, { minH: "100vh", bg: useColorModeValue("gray.50", "gray.900"), children: [_jsx(SidebarContent, { onClose: () => onClose, display: { base: "none", md: "block" } }), _jsx(Drawer, { isOpen: isOpen, placement: "left", onClose: onClose, returnFocusOnClose: false, onOverlayClick: onClose, size: "full", children: _jsx(DrawerContent, { children: _jsx(SidebarContent, { onClose: onClose }) }) }), _jsx(MobileNav, { display: { base: "flex", md: "none" }, onOpen: onOpen }), _jsx(Box, { ml: { base: 0, md: 60 }, p: "4", children: children })] }));
};
const SidebarContent = ({ onClose, ...rest }) => {
    return (_jsxs(Box, { bg: useColorModeValue("white", "gray.900"), borderRight: "1px", borderRightColor: useColorModeValue("gray.200", "gray.700"), w: { base: "full", md: 60 }, pos: "fixed", h: "full", ...rest, children: [_jsxs(Flex, { h: "20", alignItems: "center", mx: "8", justifyContent: "space-between", children: [_jsx(Text, { fontSize: "2xl", fontFamily: "monospace", fontWeight: "bold", children: "Logo" }), _jsx(CloseButton, { display: { base: "flex", md: "none" }, onClick: onClose })] }), LinkItems.map((link) => (_jsx(NavItem, { icon: link.icon, link: link.link, children: link.name }, link.name)))] }));
};
const NavItem = ({ icon, children, link, ...rest }) => {
    return (_jsx(Box, { as: Link, to: link, style: { textDecoration: "none" }, _focus: { boxShadow: "none" }, children: _jsxs(Flex, { align: "center", p: "4", mx: "4", borderRadius: "lg", role: "group", cursor: "pointer", _hover: {
                bg: "cyan.400",
                color: "white",
            }, ...rest, children: [icon && (_jsx(Icon, { mr: "4", fontSize: "16", _groupHover: {
                        color: "white",
                    }, as: icon })), children] }) }));
};
const MobileNav = ({ onOpen, ...rest }) => {
    return (_jsxs(Flex, { ml: { base: 0, md: 60 }, px: { base: 4, md: 24 }, height: "20", alignItems: "center", bg: useColorModeValue("white", "gray.900"), borderBottomWidth: "1px", borderBottomColor: useColorModeValue("gray.200", "gray.700"), justifyContent: "flex-start", ...rest, children: [_jsx(IconButton, { variant: "outline", onClick: onOpen, "aria-label": "open menu", icon: _jsx(FiMenu, {}) }), _jsx(Text, { fontSize: "2xl", ml: "8", fontFamily: "monospace", fontWeight: "bold", children: "Logo" })] }));
};
export default WithSideBar;
