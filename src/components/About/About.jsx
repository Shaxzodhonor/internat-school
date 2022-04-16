import "./About.scss";
import { Link } from "react-router-dom";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Logo from "../../assets/images/logo.jpg"

function About() {

  return(
    <section className="about" id="about">
      <div className="container">
        <div className="text-wrap">
          <div className="column left">
            <div className="logo-wrap">
              <img src={Logo} alt="logo" width={100} style={{borderRadius:"50%"}}/>
            </div>
            <div className="title">
              RESPUBLIKA IXTISOSLASHTIRILGAN MUSIQA MAKTABI - INTERNATI
            </div>
            <h2>Maktabimiz haqida</h2>
          </div>
          <div className="column right">
            <p className="text">
            Kingster universiteti 1920 yilda Jon Smit tomonidan jamoat manfaati uchun tashkil etilgan va u butun dunyoda tan olingan. Buyuk tariximiz davomida Kingster keng akademik imkoniyatlardan foydalanishni taklif qildi. Universitet oliy taʼlim boʻyicha jahon yetakchisi sifatida bu sohadagi oʻzgarishlarga kashshof boʻldi.
            </p>
            <Link to={"#"}>Batafsil <ArrowRightIcon /></Link>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default About;