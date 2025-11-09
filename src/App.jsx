
import './App.css'
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button label= 'Esto viene por props'/>
      <Button label= 'Login' bg={"blue"}/>
      <Button label= 'Cancelar' bg= {'green'} />
      <Button label= 'Registrar' bg={'red'}/>
    </div>
  )
}

export default App
