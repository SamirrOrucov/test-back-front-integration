import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./assets/layout/MainLayout/MainLayout";
import Home from "./assets/pages/Home";
import AddPage from "./assets/pages/Add/AddPage";
import UpdatePage from "./assets/pages/Update/UpdatePage";
import BasketPage from "./assets/pages/Basket/BasketPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/addpage" element={<AddPage />} />
            <Route path="/edit/:id" element={<UpdatePage />} />
            <Route path="/basket" element={<BasketPage />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
