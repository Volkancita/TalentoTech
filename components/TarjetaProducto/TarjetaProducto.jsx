import styles from './TarjetaProducto.module.css';

function TarjetaProducto({ imagen, nombre, precio }) {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} className={styles.image} />
      <h3 className={styles.title}>{nombre}</h3>
      <p className={styles.price}>${precio}</p>
      <button className={styles.button}>Comprar</button>
    </div>
  );
}

export default TarjetaProducto;