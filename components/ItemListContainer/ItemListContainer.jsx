import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

export function ItemListContainer({ Mensaje }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar la información de los productos');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', padding: '40px', fontSize: '18px' }}>Cargando productos, por favor espere...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', color: 'red', padding: '40px' }}>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className={styles.subtitulo}>{Mensaje}</h2>
      <div className={styles.productos}>
        <ItemList productos={productos} />
      </div>
    </div>
  );
}