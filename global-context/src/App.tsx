import './App.css';
import { useGlobalContext } from './context';

function App() {
  
  const {name} = useGlobalContext();

  return (
    <>
      <p>Hello {name}</p>
    </>
  )
}

export default App
