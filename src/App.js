import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Category from "./components/Shop/Category";
import Product from "./components/Shop/Product";
import Shop from "./components/Shop/Shop";
import ShopLayout from "./components/Shop/ShopLayout";
import ShoppingState from "./context/ShoppingState";

function App() {
  return (
    <ShoppingState>
      <Cart />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<ShopLayout />}>
            <Route index={true} element={<Shop />} />
            <Route path=":category" element={<Category />} />
          </Route>
        </Routes>
      </div>
    </ShoppingState>
  );
}

export default App;
