import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@chakra-ui/react";
import WithSideBar from "../../layouts/WithSideBar";
const Dashboard = () => {
    return (_jsx(WithSideBar, { children: _jsx(Box, { bg: "gray.50", minH: "100vh", children: "Dashboard" }) }));
};
export default Dashboard;
