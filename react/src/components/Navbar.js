import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>📚 Mi Biblioteca</div>
      <div style={styles.links}>
        <a href="#" style={styles.link}>Explorar</a>
        <a href="#" style={styles.link}>Mi colección</a>
        <a href="#" style={styles.link}>Mi perfil</a>
      </div>
      <input
        type="text"
        placeholder="Buscar libros..."
        style={styles.search}
      />
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f4f1ea',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc',
    fontFamily: 'Arial, sans-serif',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#372213',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#372213',
    fontSize: '16px',
  },
  search: {
    padding: '6px 10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
};
