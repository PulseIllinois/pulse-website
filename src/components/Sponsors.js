import Footer from "./Footer";
import styles from "./Sponsors.module.css";

function Sponsors() {
  return (
    <div className={styles.container}>
      <h1>Sponsors</h1>
      <div>
        <div className={styles.col}>
          <div className={styles.row}>
            <img className={styles.logo} src={require("../assets/AMD.png")} alt="AMD Logo" />
          </div>
          <div className={styles.row}>
            <img className={styles.logo} src={require("../assets/Capital One white.png")} alt="Capital One Logo" />
            <img className={styles.logo} src={require("../assets/Texas Instruments white.png")} alt="Texas Instruments Logo" />
          </div>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  )
}

export default Sponsors