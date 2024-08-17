import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real State</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </Box>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
