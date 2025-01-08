import "./Home.css"
import headshot from "../Images/Terry-headshot.png"
import linkedinLogo from "../Images/Linkedin.png"
import githubLogo from "../Images/Github.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import resumepdf from "../Resume/Resume.pdf"


const Home = () => {
  return (
    <div id="fullHome">
    <section id ="homeGrid">

      <img src= {headshot} alt="Camera Headshot of Me" id="headshot"/>
      <div className="homeText">
        <p>
          Hello! I am Terry Lu, a Third-Year Computer Science Student at the University of Florida. I have experience through personal projects, internships, and classes for fields such as Web Development and Automation.
        </p>
      </div>

      <div className="buttons">
        <a href="#contact-me">
          <button>
          <FontAwesomeIcon icon={faEnvelope}
            className="faIconEnvelope"/>
            Contact Me
            <FontAwesomeIcon icon={faArrowRightLong}
            className="faIcon"/>
          </button>
        </a>
        <a href= {resumepdf} download= "Terry_Lu_Resume">
          <button>
            Download Resume 
            <FontAwesomeIcon icon={faArrowDown}
            className="faIcon"/>
          </button>
        </a>
      </div>

      <div className="icons">
        <a href= "https://www.linkedin.com/in/terrylu12212/" target="_blank" rel="noreferrer">
          <img src= {linkedinLogo} alt="Linkedin Logo" className="logo"/>
        </a>
        <a href="https://github.com/terrylu12212" target="_blank" rel="noreferrer">
          <img src= {githubLogo} alt="GitHub Logo" className="github"/>
        </a>
      </div>
    </section>
    </div>
  )
}

export default Home
