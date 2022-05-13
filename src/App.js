import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailList from "./pages/detailList/DetailList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
