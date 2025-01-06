import "./Experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">

        <div className="description">
          <h3>Florida Community Innovation Foundation</h3>
          <h4>Gainesville, Florida</h4>
          <p>Participated in a comprehensive course focused on full-stack development, including HTML and CSS, ReactJS, and NodeJS, to develop skills for future projects and tasks in the organization.</p>
        </div>


        <div className="description">
          <h3>Clubfinity-UF Software Engineering Club</h3>
          <h4>Gainesville, Florida</h4>
          <p>
            Worked within the Web Development Team on tasks such as creating a search form that allow users to navigate and locate clubs on the Clubfinity application.
          </p>
        </div>

        <div className="description">
          <h3>Crowley Maritime Corporation</h3>
          <h4>Jacksonville, Florida</h4>
          <p>
            Created Power Automate automation to extract data from thousands of PDF reports and generate CSV files, leveraging AI Models and PowerFX code. Also implemented a Python data pipeline within Dataiku to automate the ETL of CSV files into a Snowflake Database. Additional tasks included creating entity relationship diagrams for tables and objects within Salesforce.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Experience
