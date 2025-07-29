import React from 'react';
import { 
    FaPython, 
    FaJava, 
    FaHtml5, 
    FaCss3Alt, 
    FaGitAlt, 
    FaJsSquare, 
    FaBrain,
    FaDocker,
    FaLinux
} from 'react-icons/fa';
import { 
    SiMongodb, 
    SiMysql, 
    SiPandas, 
    SiNumpy, 
    SiFlask, 
    SiNextdotjs,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiOpencv,
    SiKeras,
    SiPostgresql,
      SiAmazonwebservices
} from 'react-icons/si';

function Skills() {
    return (
        <section id="skills" className="container">
            <h2 className="section-heading">
                <span className="gradient-text">Technical Arsenal</span>
            </h2>
            
            <div className="skill-category">
                <h3>Programming Languages</h3>
                <div className="skills-container">
                    <span className="skill-tag"><FaPython /> Python</span>
                    <span className="skill-tag"><FaJava /> Java</span>
                    <span className="skill-tag">R</span>
                </div>
            </div>
            
            <div className="skill-category">
                <h3>Web Technologies</h3>
                <div className="skills-container">
                    <span className="skill-tag"><FaHtml5 /> HTML</span>
                    <span className="skill-tag"><FaCss3Alt /> CSS</span>
                    <span className="skill-tag"><FaJsSquare /> JavaScript</span>
                </div>
            </div>
            
            <div className="skill-category">
                <h3>Database Management</h3>
                <div className="skills-container">
                    <span className="skill-tag"><SiMysql /> MySQL</span>
                    <span className="skill-tag"><SiMongodb /> MongoDB</span>
                    <span className="skill-tag"><SiPostgresql /> PostgreSQL</span>
                </div>
            </div>
            
            <div className="skill-category">
                <h3>Data Science & Machine Learning</h3>
                <div className="skills-container">
                    <span className="skill-tag"><SiPandas /> Pandas</span>
                    <span className="skill-tag"><SiNumpy /> NumPy</span>
                    <span className="skill-tag"><SiTensorflow /> TensorFlow</span>
                    <span className="skill-tag"><SiPytorch /> PyTorch</span>
                    <span className="skill-tag"><SiScikitlearn /> Scikit-learn</span>
                    <span className="skill-tag"><SiKeras /> Keras</span>
                    <span className="skill-tag"><SiOpencv /> OpenCV</span>
                    <span className="skill-tag">Data Preprocessing</span>
                    <span className="skill-tag">Feature Engineering</span>
                </div>
            </div>
            
            <div className="skill-category">
                <h3>Tools & Frameworks</h3>
                <div className="skills-container">
                    <span className="skill-tag">Tkinter</span>
                    <span className="skill-tag"><SiFlask /> Flask</span>
                    <span className="skill-tag"><FaDocker /> Docker</span>
                    <span className="skill-tag"><FaLinux /> Linux</span>
                    <span className="skill-tag"><SiAmazonwebservices /> AWS</span>
                </div>
            </div>
            
            <div className="skill-category">
                <h3>AI & Deep Learning</h3>
                <div className="skills-container">
                    <span className="skill-tag">Natural Language Processing</span>
                    <span className="skill-tag">Computer Vision</span>
                    <span className="skill-tag">Deep Learning</span>
                    <span className="skill-tag"><FaBrain /> Hugging Face</span>
                </div>
            </div>

            <div className="skill-category">
                <h3>Version Control & Development</h3>
                <div className="skills-container">
                    <span className="skill-tag"><FaGitAlt /> Git & GitHub</span>
                    <span className="skill-tag">RESTful APIs</span>
                    <span className="skill-tag">Agile Development</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;
