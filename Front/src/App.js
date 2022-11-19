import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/home/Home";
import Footer from "./components/utils/footer/Footer";
import Menu from "./components/utils/menu/Menu";
import SignUp from "./components/views/signUp/SignUp";
import Contact from "./components/views/contact/Contact";
import Explore from "./components/views/explore/Explore";
import Login from "./components/views/login/Login";
import Foods from "./components/views/foods/Foods";
import PageNotFound from "./components/views/404/PageNotFound";
import "./reset.styles.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Menu isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/explore" exact element={<Explore />} />
          <Route path="/foods/:id" element={<Foods />} />
          <Route
            path="/login"
            exact
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
