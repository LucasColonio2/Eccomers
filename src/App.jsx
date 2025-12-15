import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import NavBarContainer from './components/NavBarContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import { Toaster } from 'react-hot-toast';
import Box from "@mui/material/Box";

function App() {
  return (
    <BrowserRouter>

      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <NavBarContainer />

        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Box>

        <Toaster />
        <Box sx={{ mt: "auto" }}>
          <Footer />
        </Box>

      </Box>
    </BrowserRouter>
  )
}

export default App

