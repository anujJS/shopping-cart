import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleCard from "./pages/SingleCard";
import CartContextProvider from "./context/CartContext.js";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/SingleCart" element={<SingleCard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
