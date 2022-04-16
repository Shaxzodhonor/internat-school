import "./News.scss";

import { Link } from "react-router-dom";

import LinkIcon from '@mui/icons-material/Link';

function News()
 {
  return(
    <section className="news" id="news">
        <div className="wrap container">
          <div className="column left">
            <div className="title-wrap">
              <h2>News & Updates</h2>
              <hr className="line"/>
            </div>
            <Link className="link" to={"#"}>Read All News</Link>
            <div className="content">
              <div className="big-card">
                <div className="img-wrap">
                  <img src="" alt="" />
                </div>
                <div className="text-wrap">
                  <div className="info">
                    <span className="date">06.10.2022 </span>
                     /
                    <span className="category"> admission, student</span>
                  </div>
                  <h3 className="title">Professor Albert joint research on mobile money in Tanzania</h3>
                </div>
              </div>
              <ul className="list">
                <li className="item">
                  <div className="img-wrap">
                  <img src="" alt="" />
                </div>
                <div className="text-wrap">
                  <div className="info">
                    <span className="date">06.10.2022</span>
                     /
                    <span className="category">admission, student</span>
                  </div>
                  <h3 className="title">Professor Albert joint research on mobile money in Tanzania</h3>
                </div>
                </li>
                <li className="item">
                  <div className="img-wrap">
                  <img src="" alt="" />
                </div>
                <div className="text-wrap">
                  <div className="info">
                    <span className="date">06.10.2022</span>
                     /
                    <span className="category">admission, student</span>
                  </div>
                  <h3 className="title">Professor Albert joint research on mobile money in Tanzania</h3>
                </div>
                </li>
                <li className="item">
                  <div className="img-wrap">
                  <img src="" alt="" />
                </div>
                <div className="text-wrap">
                  <div className="info">
                    <span className="date">06.10.2022</span>
                     /
                    <span className="category">admission, student</span>
                  </div>
                  <h3 className="title">Professor Albert joint research on mobile money in Tanzania</h3>
                </div>
                </li>
                <li className="item">
                  <div className="img-wrap">
                  <img src="" alt="" />
                </div>
                <div className="text-wrap">
                  <div className="info">
                    <span className="date">06.10.2022</span>
                     /
                    <span className="category">admission, student</span>
                  </div>
                  <h3 className="title">Professor Albert joint research on mobile money in Tanzania</h3>
                </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="column right">
            <div className="img-wrap"></div>
            <div className="title-wrap">
              <LinkIcon className="icon" />
              <h2>Tezkor havolalar</h2>
            </div>
            <ul className="list">
              <li className="item">
                <Link to={"#"}>Bitiruvchilar va Donorlar</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Atletik kalendar</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Kingsterning barcha tadbirlari</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Hamkorlik va keng qamrovli aloqa</Link>
              </li>
              <li className="item">
                <Link to={"#"}>Akademik dasturlar</Link>
              </li>
              <li className="item">
                <Link to={"#"}>O'qish va to'lovlar</Link>
              </li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default News;