import './App.css';
import Routes from '../src/routes/Routes';
import { ContextProvider } from './context/MyContext';


function App() {
  return (
    <>
     <ContextProvider >
      <Routes />
      </ContextProvider>    
    </>
  );
}

export default App;


//valores do context provider
//value={{openModalAgendador , setOpenModalAgendador }}