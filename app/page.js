import styles from "./page.module.css";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.centeredText}>
      <h1>Let's Meet!</h1>
      </div>
      
    </div>
  );
}
