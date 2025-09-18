import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComputerServices from "./pages/ComputerServices";
import TechnologyConsulting from "./pages/TechnologyConsulting";
import Footer from "./components/Footer";

function RouteCollection() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="computer-services" element={<ComputerServices />} />
      <Route path="technology-consulting" element={<TechnologyConsulting />} />
      <Route path="welcome" element={<Home />} />
    </Routes>
  );
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Header />
        <RouteCollection />
        <Footer />
      </Container>
    </>
  );
}

export default App;
