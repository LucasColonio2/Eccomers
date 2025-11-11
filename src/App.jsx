
import Button from './components/Button';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import TaskList from './components/TaskList';
import CicloDeVida from './components/CicloDeVida';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer text ='FUTUROS PRODUCTOS'/>
      <TaskList/>
      <CicloDeVida/>
    </>
  )
}

export default App

