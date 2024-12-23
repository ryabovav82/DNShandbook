import styles from './App.module.css';
import {Header} from "../header/Header.tsx";
import {MainPage} from "../main-page/MainPage.tsx";
import {Footer} from "../footer/Footer.tsx";

function App() {

  return (
      <div className={styles.app}>
        <Header />
        <MainPage />
          <Footer />
      </div>
  )
}

export default App
