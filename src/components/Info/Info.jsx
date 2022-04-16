import "./Info.scss";

import { Link } from "react-router-dom";

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function Info() {

  return(
    <section className="info" id="info">
        <div className="container">
        <div className="info-wrap">
          <ul className="list">
            <li className="item">
              <div className="icon-wrap">
                <LocalLibraryIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">Education Services</h3>
                <p className="text">
                  Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.
                </p>
                <Link className="btn" to={"#"}>Learn More <ArrowRightIcon/></Link>
              </div>
            </li>
            <li className="item">
              <div className="icon-wrap">
                <SchoolIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">Education Services</h3>
                <p className="text">
                  Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.
                </p>
                <Link className="btn" to={"#"}>Learn More <ArrowRightIcon/></Link>
              </div>
            </li>
            <li className="item">
              <div className="icon-wrap">
                <PublicIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">Education Services</h3>
                <p className="text">
                  Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.
                </p>
                <Link className="btn" to={"#"}>Learn More <ArrowRightIcon/></Link>
              </div>
            </li>
            <li className="item">
              <div className="icon-wrap">
                <LocalLibraryIcon className="icon"/>
              </div>
              <div className="content">
                <h3 className="title">Education Services</h3>
                <p className="text">
                  Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.
                </p>
                <Link className="btn" to={"#"}>Learn More <ArrowRightIcon/></Link>
              </div>
            </li>
          </ul>
        </div>
        </div>
    </section>
  )
}

export default Info;