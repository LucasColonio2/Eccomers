import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import FootBar from './components/FootBar';
import NavBarContainer from './components/NavBarContainer';

function App() {
  return (
    <>
      <NavBarContainer/>
      <ItemListContainer/>
      <FootBar/>
    </>
  )
}

export default App

