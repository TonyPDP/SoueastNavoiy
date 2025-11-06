import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars/Cars";
import Infocars from "./pages/InfoCars/Infocars";
import Layout from "./pages/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import News from "./pages/News/News";
import NewsDetail from "./pages/News/NewsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cars />} />
          <Route path="models" element={<Infocars />} />
          <Route path="cars" element={<Infocars />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="car/:carName" element={<Infocars />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
