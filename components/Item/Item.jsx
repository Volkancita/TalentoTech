import { useState } from 'react';
import styles from './Item.module.css';

export function Item({ id, nombre, precio, stock, imagen }) {
  const [cantidad, setCantidad] = useState(1);
  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  const agregarAlCarrito = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };

  return (
    <div className={styles.card}>
      <span onClick={marcarComoFavorito} className={styles.favorito}>
        {esFavorito ? '★' : '☆'}
      </span>

      {imagen && <img src={imagen} alt={nombre} className={styles.image} />}

      <h3 className={styles.title}>{nombre}</h3>
      <p className={styles.price}>Precio: \${precio}</p>
      <p className={styles.stock}>Stock disponible: {stock}</p>

      <div className={styles.counterContainer}>
        <button onClick={decrementar} className={styles.counterButton}>-</button>
        <span style={{ fontWeight: 'bold' }}>{cantidad}</span>
        <button onClick={incrementar} className={styles.counterButton}>+</button>
      </div>

      <button onClick={agregarAlCarrito} className={styles.addButton}>
        Agregar al Carrito
      </button>
    </div>
  );
}