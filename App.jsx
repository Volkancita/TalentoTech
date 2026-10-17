import './App.css';
import { Layout } from './components/Layout/Layout';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Directorio } from './components/Directorio/Directorio';

function App() {
  return (
    <Layout>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>¡Bienvenidos a nuestra Tienda!</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#5f523b' }}>
        Productos cargados dinámicamente mediante useEffect y fetch .
      </p>
      
      {/* 1. Catálogo de productos (Clase 4 y 5) */}
      <ItemListContainer Mensaje="Nuestros productos destacados" />

      {/* 2. Directorio de contactos - Sobre Nosotros */}
      <Directorio />
    </Layout>
  );
}

export default App;