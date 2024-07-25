import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const RootPage = (props) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "90%",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default RootPage;
