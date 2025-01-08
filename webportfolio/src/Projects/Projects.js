import "./Projects.css"
import FreshWatch from "../Images/FreshWatch.png"
import Shiftflow from "../Images/Timer.jpg"
import Crimes from "../Images/Crimes.png"

const Projects = () => {
  return (
    <section id ="projects">
        <h2>Recent Projects</h2>
        <div className="project-box">
          <div className="left-project-box">
            <h3>FreshWatch</h3>
            <p>
              Built a full-stack grocery tracking application to provide an efficient way for users to track their groceries and expiration dates. Used MongoDB, ExpressJS, ReactJS, and NodeJS.
            </p>
            <a href="https://github.com/terrylu12212/FreshWatch-Terry-" target="_blank"  rel="noreferrer">
            <button>
              View GitHub
            </button>
            </a>
          </div>
          <div className="image-container">
            <img src= {FreshWatch} alt="FreshWatch" className="image"/>
          </div>
        </div>

        <div className="project-box">
          <div className="left-project-box">
            <h3>
              ShiftFlow Master
            </h3>
            <p>
              Collaborated with a team to create a full-stack time-tracking application for employees and managers to log time and projects. Created using MongoDB, ExpressJS, ReactJS, and NodeJS.
            </p>
            <a href="https://github.com/terrylu12212/ShiftFlow-Master" target="_blank"  rel="noreferrer">
            <button>
              View GitHub
            </button>
            </a>
          </div>
          <div className="image-container">
            <img src= {Shiftflow} alt="ShiftFLow Master" className="image"/>
          </div>
        </div>

        <div className="project-box">
          <div className="left-project-box">
            <h3>
              Chicago Crimes 
            </h3>
            <p>
              Project developed in C++ to display districts in Chicago that had the highest crime rates, based on specific user input. Implemented sorting algorithms such as TimSort.
            </p>
            <a href="https://github.com/terrylu12212/Chicago-Crime-Project" target="_blank"  rel="noreferrer">
            <button>
              View GitHub
            </button>
            </a>
          </div>
          <div className="image-container">
            <img src= {Crimes} alt="Chicago Crimes Project" className="image"/>
          </div>
        </div>
      </section>
  )
}

export default Projects
