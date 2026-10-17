import styles from './TarjetaContacto.module.css';

export function TarjetaContacto({ nombre, puesto, email, foto }) {
  return (
    <div className={styles.card}>
      <img src={foto} alt={nombre} className={styles.avatar} />
      <h4 className={styles.nombre}>{nombre}</h4>
      <p className={styles.puesto}>{puesto}</p>
      <p className={styles.email}>{email}</p>
    </div>
  );
}