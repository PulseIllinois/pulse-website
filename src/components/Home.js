import Footer from './Footer';
import styles from './Home.module.css';

function Home() {
  const clickRegister = () => {
    const url = "https://forms.gle/9BoCN5HH8pb8ou1PA";
    window.open(url, "_blank").focus();
  }

  return (
    <div className={styles.colContainer}>
      <div className={`${styles.mainContent}`}>
        <img className={styles.logo} src={require("../assets/full_logo_t.png")} alt="Pulse 2023 Logo Full" />
        <div className={styles.welcomeText}>
          Welcome to the twelfth annual technology conference to celebrate the latest developments in the ECE and CS departments at the University of Illinois Urbana-Champaign
        </div>
      </div>
      <button className={styles.btn} onClick={clickRegister}>Register Now!</button>

      <Footer />
    </div>
  )
}

export default Home;