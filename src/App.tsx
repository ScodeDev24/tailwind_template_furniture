import { Route, Routes } from "react-router-dom";
import Nabvar from "./components/Navbar/Nabvar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="bg-gray-100">
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
