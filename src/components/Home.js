import Footer from './Footer';
import styles from './Home.module.css';

function Home() {
  // const clickRegister = () => {
  //   const url = "https://docs.google.com/forms/d/e/1FAIpQLSeNBgDQYoUOjdeOXp-RAVSF7nz3hvaMQncSB2yFU6fxc8pa-w/viewform";
  //   window.open(url, "_blank").focus();
  // }

  return (
    <div className={styles.colContainer}>
      <div className={`${styles.mainContent}`}>
        <img className={styles.logo}  src={require("../assets/2025/full_logo_25.png")} alt="Pulse 2024 Logo Full" />
        <div className={styles.welcomeText}>
          Welcome to the fourteenth annual technology conference to celebrate the latest developments in the ECE and CS departments at the University of Illinois Urbana-Champaign!
        </div>
      </div>
      {/* <button className={styles.btn} onClick={clickRegister}>Apply for our staff!</button> */}

      <Footer />
    </div>
  )
}

export default Home;
