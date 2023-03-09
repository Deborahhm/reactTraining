import './index.css'
import reactLogo from './assets/react.svg'
import htmlLogo from './assets/htmllogo.png'
import cssLogo from './assets/csslogo.png'
import jsLogo from './assets/jslogo.png'


function Skills() {
    return (
        <div id="skills">
            <h2>Skills</h2>
            <section className="skills-container" >
                <img className="Logo" src={reactLogo} alt="React Logo" />
                <img className="Logo" src={htmlLogo} alt="html Logo" />
                <img className="Logo" src={cssLogo} alt="css Logo" />
                <img className="Logo" src={jsLogo} alt="js Logo" />
            </section>
        </div>
    )
  }

export default Skills