import { Route, Routes } from "react-router-dom";
import "./App.css";
import GrandPa from "./components/grandPa/GrandPa";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import OrderReview from "./components/orderReview/OrderReview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/review" element={<OrderReview />}></Route>
        <Route path="/grandpa" element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
