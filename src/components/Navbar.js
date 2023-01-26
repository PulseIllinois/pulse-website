import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const loc = useLocation().pathname;
  return (
    <nav>
      <div className={styles.container}>
        <Link to="/">
          <img style={{ width: '70px', height: '70px', paddingTop: "20px" }} src={require("../assets/Icon_t.png")} alt="Pulse 2023 Logo" />
        </Link>
        <div className={styles.linkContainer}>
          <h3><Link className={`${styles.link} ${loc === "/" ? styles.active : ''}`} to="/">HOME</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/sponsors" ? styles.active : ''}`} to="/sponsors">SPONSORS</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/events" ? styles.active : ''}`} to="/events">EVENTS</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/our-team" ? styles.active : ''}`} to="/our-team">OUR TEAM</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/contact-us" ? styles.active : ''}`} to="/contact-us">CONTACT US</Link></h3>
        </div>
      </div>
    </nav>
  )
}

export default Navbar