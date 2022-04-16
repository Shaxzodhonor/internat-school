import "./Hero.scss";
import BackVedio from "../../assets/vedio/bg-vedio.mp4"

function Hero(){
  return(
    <div className="hero">
        <div className="vedio-wrap">
          <video loop autoPlay muted width={"100%"} height={"100%"}>
            <source src={BackVedio} type="video/mp4" />
          </video>
        </div>
      <div className="hero-wrap container">
        <div className="hero-content">
          <h1>RESPUBLIKA IXTISOSLASHTIRILGAN SAN'AT MAKTABI - INTERNATI</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero;