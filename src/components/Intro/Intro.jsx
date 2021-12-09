import './Intro.css'
import me from '../../img/me.png'

const Intro = () => {
  return (
      <div className="intro">
          <div className="intro__left">
              <div className="left__wrapper">
                  <h2 className="left__title">Hello, my name is</h2>
                  <h1 className="left__name">David Olawale</h1>
                  <div className="left__jobInfo">
                      <div className="jobInfo__wrapper">
                          <div className="jobInfo__title">Web Developer</div>
                          <div className="jobInfo__title">UI/UX Designer</div>
                          <div className="jobInfo__title">Photographer</div>
                          <div className="jobInfo__title">Content Creator</div>
                          <div className="jobInfo__title">Writer</div>
                      </div>
                  </div>
                  <div className="jobInfo__description">
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites, web
                      services and online stores.
                  </div>
              </div>
          </div>
          <div className="intro__right">
              <div className="right__background"></div>
              <img src={me} alt="my photo" className="right__image" />
          </div>
      </div>
  );
}

export default Intro
