import "./Header.scss"
import { Link } from 'react-router-dom';
import { useRef, useEffect } from "react";

import Logo from "../../assets/images/logo.jpg"
// ICONS
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

function Header(){
  const head = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', function() {
      const allItem = document.querySelectorAll(".header .menu .menu-item")

      if(window.scrollY > 150) {
        head.current.classList.add('sticky')
        allItem.forEach(item => {
          item.classList.add("padding")
        })
      } else {
        head.current.classList.remove('sticky')
        allItem.forEach(item => {
          item.classList.remove("padding")
        })
      }
    })
  })

  return(<>
    <HeaderTop />
    <header ref={head} className='header' id="header">
      <div className="header-wrap container">
        <div className="header_left">
          {/* <img src={Logo} alt="logo" width={"120"} style={{borderRadius:"50%"}} /> */}
        </div>
        <div className="header_right">
          <ul className="menu">
            <li>
              <Link className="menu-item" to={"#"} >Maktab</Link>
              <ul className="dropdown maktab">
                <li>
                  <Link to={"#"}>Rahbariyat</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab haqida</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab tarixi</Link>
                </li>
                <li>
                  <Link to={"#"}>Bog'lanish</Link>
                </li>
                <li>
                  <Link to={"#"}>Tuzilma</Link>
                </li>
                <li>
                  <Link to={"#"}>Kengashlar</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'sh ish o'rni</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"#"} className="menu-item">Bo'limlar</Link>
              <ul className="dropdown bo'lim">
                <li>
                  <Link to={"#"}>Musiqa bo'limi</Link>
                </li>
                <li>
                  <Link to={"#"}>Rassomchilik bo'limi</Link>
                </li>
                <li>
                  <Link to={"#"}>Umum ta'lim bo'limi</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="menu-item" to={"#"} >E'lonlar</Link>
              <ul className="dropdown">
                <li>
                  <Link to={"#"}>Maktabimiz e'lonlari</Link>
                </li>
                <li>
                  <Link to={"#"}></Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab tarixi</Link>
                </li>
                <li>
                  <Link to={"#"}>Bog'lanish</Link>
                </li>
                <li>
                  <Link to={"#"}>Tuzilma</Link>
                </li>
                <li>
                  <Link to={"#"}>Kengashlar</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'sh ish o'rni</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'limlar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="menu-item" to={"#"} >Xalqaro</Link>
              <ul className="dropdown">
                <li>
                  <Link to={"#"}>Rahbariyat</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab haqida</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab tarixi</Link>
                </li>
                <li>
                  <Link to={"#"}>Bog'lanish</Link>
                </li>
                <li>
                  <Link to={"#"}>Tuzilma</Link>
                </li>
                <li>
                  <Link to={"#"}>Kengashlar</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'sh ish o'rni</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'limlar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="menu-item" to={"#"} >Rahbariyat</Link>
              <ul className="dropdown">
                <li>
                  <Link to={"#"}>Rahbariyat</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab haqida</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab tarixi</Link>
                </li>
                <li>
                  <Link to={"#"}>Bog'lanish</Link>
                </li>
                <li>
                  <Link to={"#"}>Tuzilma</Link>
                </li>
                <li>
                  <Link to={"#"}>Kengashlar</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'sh ish o'rni</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'limlar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="menu-item" to={"#"} >Arxiv</Link>
              <ul className="dropdown left">
                <li>
                  <Link to={"#"}>Rahbariyat</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab haqida</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab tarixi</Link>
                </li>
                <li>
                  <Link to={"#"}>Bog'lanish</Link>
                </li>
                <li>
                  <Link to={"#"}>Tuzilma</Link>
                </li>
                <li>
                  <Link to={"#"}>Kengashlar</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'sh ish o'rni</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'limlar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="menu-item" to={"#"} >School Life</Link>
              <ul className="dropdown left">
                <li>
                  <Link to={"#"}>Rahbariyat</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab haqida</Link>
                </li>
                <li>
                  <Link to={"#"}>Maktab tarixi</Link>
                </li>
                <li>
                  <Link to={"#"}>Bog'lanish</Link>
                </li>
                <li>
                  <Link to={"#"}>Tuzilma</Link>
                </li>
                <li>
                  <Link to={"#"}>Kengashlar</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'sh ish o'rni</Link>
                </li>
                <li>
                  <Link to={"#"}>Bo'limlar</Link>
                </li>
              </ul>
            </li>
            <li>
              <input type="search" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  </>)
}

function HeaderTop(){
  return (
  <>
    <div className="header-top">
      <div className="header-top_wrap container">
        <div className="header-top_left left column">
          <div className="left_mail-info">
            <MailOutlineIcon className="icon" />
            ContactInternatSchool.edu
          </div>
          <div className="left_phone-info">
            <CallIcon className="icon" />
            + 000 00 000 00 00
          </div>
        </div>
        <ul className='header-top_right right column'>
          <li className="right_menu-item">
            <Link to={'#'}>Alumni</Link>
          </li>
          <li className="right_menu-item">
            <Link to={'#'}>Calendar</Link>
          </li>
          <li className="right_menu-item">
            <Link to={'#'}>Portal</Link>
          </li>
          <li className="right_menu-item support">
            <Link to={'#'}>Support I-School</Link>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default Header;