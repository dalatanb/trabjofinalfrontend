import ListaProductos from './components/ListaProductos';
import './App.css';

let listaProductos = [
  'manzana verde',
  'cebolla',
  'cebollin'
]

function App() {
  return (
    <>
    <h1>Lista de compras</h1>
    <ListaProductos listaC = {listaProductos}/>
    </>
  
  );
}

export default App;
