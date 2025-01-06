import "./Header.css"

const Header = () => {
  return (
    <div className="headerContainer">
      <a href="#home" className="headerAbout">Home</a>
      <a href="#about-me" className="headerAbout">About Me</a>
      <a href="#projects" className="headerAbout">Projects</a>
      <a href="#skills" className="headerAbout">Skills</a>
      <a href="#experience" className="headerAbout">Experience</a>
      <a href="#contact-me" className="headerAbout">Contact</a>
    </div>
  )
}

export default Header
