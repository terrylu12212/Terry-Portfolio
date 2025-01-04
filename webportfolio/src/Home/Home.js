import "./Home.css"
import headshot from "../Images/Terry-headshot.png"
import linkedinLogo from "../Images/Linkedin.png"
import githubLogo from "../Images/Github.png"

const Home = () => {
  return (
    <section id ="homeGrid">

      <img src= {headshot} alt="Camera Headshot of Me" id="headshot"/>
      <div className="homeText">
        <p>
          Hello! I am <b>Terry Lu</b>, a Third-Year Computer Science Student at the <b>University of Florida</b>. I have experience through personal projects, internships, and classes for fields such as <b>Web Development</b> and <b>Automation</b>.
        </p>
      </div>

      <div className="buttons">
        <button>Button 1</button>
        <button>Button 2</button>
      </div>

      <div className="icons">
        <a href= "https://www.linkedin.com/in/terrylu12212/" target="_blank" rel="noreferrer">
          <img src= {linkedinLogo} alt="Linkedin Logo" className="logo"/>
        </a>
        <a href="https://github.com/terrylu12212" target="_blank" rel="noreferrer">
          <img src= {githubLogo} alt="GitHub Logo" className="logo"/>
        </a>
      </div>
    </section>
  )
}

export default Home
