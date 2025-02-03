import Footer from './Footer';
import styles from './AboutUs.module.css';

function AboutUs() {

  return (
       <div className={styles.container}>
      <h1>Who are We?</h1> 
      <p className = {styles.intro}>Pulse, hosted at the University of Illinois at Urbana-Champaign,
 is the premier week-long tech
conference that brings together leading minds in
Electrical and Computer Engineering (ECE) and
Computer Science (CS). This event celebrates
groundbreaking advancements, facilitates
professional networking, and connects students with
industry leaders through insightful talks, dynamic
panels, and hands-on workshops. Join us in exploring
the future of technology and innovation. </p>
    <h2 className = "titleLeft">Corporate Info:  </h2>
      <a className={styles.corporateLinks} 
        href="https://drive.google.com/file/d/1fthgnswzDKvLPswvCzW909mj99JryBBU/view" 
        target="_blank" 
        rel="noopener noreferrer">
        <h3> Corporate Package </h3></a>
      <a className={styles.corporateLinks} 
        href="https://drive.google.com/file/d/10bZv_SIzxny86-qV1fnB0BxYDMy78eUA/view" 
        target="_blank" 
        rel="noopener noreferrer">
        <h3> Pamphlet </h3></a>
     <div>
    <Footer className={styles.footer} />
    </div></div>
  )
}

export default AboutUs;
