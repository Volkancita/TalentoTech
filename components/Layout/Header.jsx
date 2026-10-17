import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Mi E-commerce</h1>
      <nav className={styles.nav}>
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
        <a href="#carrito">Carrito</a>
      </nav>
    </header>
  );
}

export default Header;