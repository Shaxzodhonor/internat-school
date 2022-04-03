import "./Header.scss"
import { Link } from 'react-router-dom';

// ICONS
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

function Header(){
  return(<>
    <HeaderTop />
    <header className='header container'>
      <div className="header_left">LOGO</div>
      <div className="header_right">
        <ul>
          <li>
            <Link to={"#"} >Home</Link>
          </li>
          <li>
            <Link to={"#"} >Pages</Link>
          </li>
          <li>
            <Link to={"#"} >Academics</Link>
          </li>
          <li>
            <Link to={"#"} >Courses</Link>
          </li>
          <li>
            <Link to={"#"} >Athletic</Link>
          </li>
          <li>
            <Link to={"#"} >University Life</Link>
          </li>
          <li>
            <input type="search" />
          </li>
        </ul>
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