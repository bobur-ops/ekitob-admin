import { Box } from "@chakra-ui/react";
import WithSideBar from "../../layouts/WithSideBar";

const Dashboard = () => {
  return (
    <WithSideBar>
      <Box bg={"gray.50"} minH={"100vh"}>
        Dashboard
      </Box>
    </WithSideBar>
  );
};

export default Dashboard;
