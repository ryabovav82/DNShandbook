import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import {Header} from "../header/Header.tsx";
import {MainPage} from "../main-page/MainPage.tsx";
import {Footer} from "../footer/Footer.tsx";
import {LoginPage} from "../login-page/LoginPage.tsx";
import {RegisterPage} from "../register-page/Register-page.tsx";
import {FaqPage} from "../faq-page/FaqPage.tsx";
import {ProfilePage} from "../profile-page/Profile-page.tsx";
import {useEffect} from "react";
import {AppDispatch, useDispatch} from "../../services/store.ts";
import {checkAuth} from "../../services/slices/userSlice.ts";

function App() {

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('accessToken')) {
            dispatch(checkAuth())
        }
    }, []);

  return (
      <div className={styles.app}>
        <Header />
          <Routes>
              <Route path='/' element={ <MainPage /> } />
              <Route path='/login' element={ <LoginPage /> } />
              <Route path='/register' element={ <RegisterPage /> } />
              <Route path='/faq' element={ <FaqPage /> } />
              <Route path='/profile' element={ <ProfilePage /> } />
          </Routes>
          <Footer />
      </div>
  )
}

export default App
