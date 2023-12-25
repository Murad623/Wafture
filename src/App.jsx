import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectAccout } from './store/accountSlice';
import Settings from './pages/Settings';
import NewsDetails from './pages/NewsDetails';
import SignUp from './pages/SignUp';
const App = () => {
  const dispatch = useDispatch();
  const account = useSelector(selectAccout);
  const [loginAcc,setLoginAcc] = useState({})
  const [accDeBlockVisibility, setAccDeBlockVisibility] = useState(false);
  const accDetails = () => {
    setAccDeBlockVisibility(!accDeBlockVisibility);
  }
  const closeAccount = () => {
    setAccDeBlockVisibility(false);
    dispatch(logOut())
  }
  useEffect(()=>{
    if (account.ID == undefined) {
      setLoginAcc(JSON.parse(localStorage.getItem("account")))
    }
  },[])
  useEffect(()=>{
    if (loginAcc != undefined) {
      dispatch(logIn(loginAcc))
    }
  },[loginAcc])
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar'>
          <div className='navbarleft'>
            <Link className='links navlink' to='/'><h1 className='brend'>Wafture Studio</h1></Link>
            {account.ID && (
              <>
                <Link className='links navlink' to='/aboutus'><p>About Us</p></Link>
                <Link className='links navlink' to='/news'><p>News</p></Link>
              </>
            )}
          </div>
          {account.ID == undefined ?
            (
              <div className='accDetails'>
                <Link className='links navlink accDs' to="login">Log In</Link>
              </div>
            )
            :
            (
              <div className='accDetails'>
                <p className='accDs' onClick={accDetails}>{account.Name}</p>
                {accDeBlockVisibility && (
                  <div className='accD'>
                    <Link className='links navlink accDs' to='/settings' onClick={accDetails}>Settings</Link>
                    <Link className='links navlink accDs' to='/' onClick={closeAccount}>Log Out</Link>
                  </div>
                )}
              </div>
            )
          }


        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/newsdetails' element={<NewsDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
