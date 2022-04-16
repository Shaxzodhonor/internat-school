import { Link } from "react-router-dom";
import "./Admission.scss";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import PublicIcon from '@mui/icons-material/Public';

function Admission(){

  return(
    <section className="admission">
      <div className="wrap container">
        <ul className="menu">
          <li className="item">
            <Link to={"#"}>
              <AccountBalanceIcon className="icon"/>
              <div className="text">
                <div className="title">University Life</div>
                <span className="subtitle">Overall in here</span>
              </div>
            </Link>
          </li>
          <li className="item">
            <Link to={"#"}>
              <SchoolIcon className="icon"/>
              <div className="text">
                <div className="title">University Life</div>
                <span className="subtitle">Overall in here</span>
              </div>
            </Link>
          </li>
          <li className="item">
            <Link to={"#"}>
              <SportsKabaddiIcon className="icon"/>
              <div className="text">
                <div className="title">University Life</div>
                <span className="subtitle">Overall in here</span>
              </div>
            </Link>
          </li>
          <li className="item">
            <Link to={"#"}>
              <PublicIcon className="icon"/>
              <div className="text">
                <div className="title">University Life</div>
                <span className="subtitle">Overall in here</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="content">
          <div className="column img-wrap"></div>
          <div className="column text-wrap">
            <h2 className="title">Apply for Admission</h2>
            <div className="subtitle">Fall 2019 applications are now open</div>
            <p className="text">We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
            <button className="btn">Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admission;