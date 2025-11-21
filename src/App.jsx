import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import NavBarContainer from './components/NavBarContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />

      <Routes>
        <Route path='/' element={<ItemListContainer />}> </Route>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}> </Route>

        <Route path='/category/:categoryName' element={<ItemListContainer/>}> </Route>


      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App

