import { jsx as _jsx } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const BreadCrumbs = ({ items }) => {
    return (_jsx(Breadcrumb, { children: items.map((crumb, index) => (_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { as: Link, to: crumb.link, children: _jsx(Text, { fontSize: 24, children: crumb.value }) }) }, index))) }));
};
export default BreadCrumbs;
