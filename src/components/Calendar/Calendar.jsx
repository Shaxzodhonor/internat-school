import "./Calendar.scss";
import { Link } from "react-router-dom";

import Girl from "../../assets/images/calendar-section.png"

import ActivismIcon from '@mui/icons-material/VolunteerActivism';
import TimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MailIcon from '@mui/icons-material/MailOutline';

function Calendar (){
  
  return(
    <section className="calendar" id="calendar">
      <div className="container wrap">
        <div className="column donor">
          <div className="img-wrap">
          </div>
          <div className="text-wrap">
            <h2 className="title">Xayriya bizga yordam beradi</h2>
            <p className="text">Kingster universiteti uchun kampaniya tarixdagi eng yirik mablag' yig'ish kampaniyasidir. 1 milliard dollarlik tarixiy maqsad bilan kampaniya U of T kompaniyasining global yetakchilik salohiyatini kengaytirmoqda.</p>
          </div>
          <button className="btn"><ActivismIcon className="icon"/> Homiy bo`ling</button>
        </div>
        <div className="column calendar">
          <div className="title-wrap">
            <h2 className="title">Kelgusi voqealar</h2>
            <hr className="line" />
          </div>
          <ul className="list">
            <li className="item">
              <div className="data-wrap">
                <div className="data">17</div>
                <div className="month">December</div>
              </div>
              <div className="text-wrap">
                <h2 className="title">Fintech & Key Investment Conference</h2>
                <div className="time-location-wrap">
                  <div className="time"><TimeIcon className="icon" /> 13:00 dan 13:00 gacha</div>
                  <div className="location"><LocationOnIcon className="icon"/> Kingster katta zali</div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="data-wrap">
                <div className="data">17</div>
                <div className="month">December</div>
              </div>
              <div className="text-wrap">
                <h2 className="title">Fintech & Key Investment Conference</h2>
                <div className="time-location-wrap">
                  <div className="time"><TimeIcon className="icon" /> 13:00 dan 13:00 gacha</div>
                  <div className="location"><LocationOnIcon className="icon"/> Kingster katta zali</div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="data-wrap">
                <div className="data">17</div>
                <div className="month">December</div>
              </div>
              <div className="text-wrap">
                <h2 className="title">Fintech & Key Investment Conference</h2>
                <div className="time-location-wrap">
                  <div className="time"><TimeIcon className="icon" /> 13:00 dan 13:00 gacha</div>
                  <div className="location"><LocationOnIcon className="icon"/> Kingster katta zali</div>
                </div>
              </div>
            </li>
          </ul>
          <div className="link">
            <Link to={"#"}>Barcha voqealarni ko'rish <ArrowRightAltIcon className="icon"/></Link>
          </div>
        </div>
        <div className="column mail">
          <MailIcon className="icon" />
          <h2 className="title">
            Axborot byulleteniga obuna bo'ling
          </h2>
          <p className="text">
            Yangiliklar va voqealar haqida yangilanishlarni oling
          </p>
          <input className="input" type="email" placeholder="Sizning E-mail pochtangizni kiriting"/>
          <button className="btn">Obuna bo`ling</button>
        </div>
      </div>
    </section>
  )
}

export default Calendar;