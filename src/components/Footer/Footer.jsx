import { Link } from "react-router-dom";
import "./Footer.scss";

import Logo from "../../assets/images/logo.jpg"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


function Footer() {

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <ul className="list">
          <li className="item">
            <div className="logo-wrap">
              <img src={Logo} alt="logo" width={100} style={{borderRadius:"50%"}}/>
            </div>
            <div className="title">
              RESPUBLIKA IXTISOSLASHTIRILGAN MUSIQA MAKTABI - INTERNATI
            </div>
            <address>Toshkent shahar Chilonzor tumani Uchtepa hokimyat yaqini😁</address>
            <a className="contact" href="tel: +998916424257">+998 00 000 00 00</a>
            <a className="contact" href="mailto: mastermusic2529@gmail.com">admin@kingsteruni.edu</a>
            <hr className="line" />
          </li>
          <li className="item">
            <h3 className="title">Bizning kampus</h3>
            <hr className="line" />
            <ul className="list">
              <li className="item">
                <Link to={"#"}>Akademik</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Qurilish xizmatlari</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Qurilish xizmatlari</Link>
              </li>
            </ul>
          </li>
          <li className="item">
            <h3 className="title">Bizning kampus</h3>
            <hr className="line" />
            <ul className="list">
              <li className="item">
                <Link to={"#"}>Akademik</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Qurilish xizmatlari</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Qurilish xizmatlari</Link>
              </li>
            </ul>
          </li>
          <li className="item">
            <h3 className="title">Bizning kampus</h3>
            <hr className="line" />
            <ul className="list">
              <li className="item">
                <Link to={"#"}>Akademik</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Rejalashtirish va boshqaruv</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Qurilish xizmatlari</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Qurilish xizmatlari</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
          <div className="container wrap">
            <p className="text">Copyright All Right Reserved 2022, By Eshmurodov</p>
            <ul className="items">
              <li className="item">
                <Link to={"#"}><GoogleIcon /></Link>
              </li>
              <li className="item">
                <Link to={"#"}><FacebookIcon /></Link>
              </li>
              <li className="item">
                <Link to={"#"}><TelegramIcon /></Link>
              </li>
              <li className="item">
                <Link to={"#"}><GoogleIcon /></Link>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer;