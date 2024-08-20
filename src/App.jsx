import "./App.css";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./shared/Navber/Navber.jsx";
import Services from "./pages/Services/Services.jsx";
import Team from "./pages/Team/Team.jsx";
import Career from "./pages/Career/Career.jsx";
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Footer from "./shared/Footer/Footer.jsx"
import GetAppoinment from "./pages/GetAppoinment/GetAppoinment.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/getAppoinment" element={<GetAppoinment/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
