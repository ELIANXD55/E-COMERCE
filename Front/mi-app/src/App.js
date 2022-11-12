import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/home/Home";
import Footer from "./components/utils/footer/Footer";
import "./reset.styles.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="nav"></div> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
