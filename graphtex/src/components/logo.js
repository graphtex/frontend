import styles from '../styles/Navbar.module.css';


export const Logo = () => {
    return (
      <h1
        className={`${styles.navbar} ${offset === 0 ? '' : styles.show_shadow}`}
      >
        WhenIs<span style={{ color: '#087f5b' }}>Better</span>
      </h1>
    );
  };
  
export default Logo;