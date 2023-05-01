import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { Footer, Header } from "./components/index";
import {
  CareersPage,
  ContactPage,
  HomePage,
  NewsPage,
  WorkPage,
} from "./pages/index";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={HomePage} />
        <Route path="/work/" element={WorkPage} />
        <Route path="/news/" element={NewsPage} />
        <Route path="/careers/" element={CareersPage} />
        <Route path="/contact/" element={ContactPage} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
