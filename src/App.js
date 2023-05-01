import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { Footer, Header } from "./components/index";
import {
  AboutPage,
  CareersPage,
  ContactPage,
  HomePage,
  NewsPage,
  ServicesPage,
  WorkPage,
} from "./pages/index";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/work/" element={<WorkPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/services/" element={<ServicesPage />} />
          <Route path="/news/" element={<NewsPage />} />
          <Route path="/careers/" element={<CareersPage />} />
          <Route path="/contact/" element={<ContactPage />} />
        </Routes>

        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
