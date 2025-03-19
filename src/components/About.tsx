import AnimatedSection from './AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import myPic from '../components/photos/me.jpg'; // adjust the path as needed
import '../components/css/About.css';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'RESTful APIs', level: 88 },
    ],
  },
  {
    category: 'Database & Tools',
    technologies: [
      { name: 'MongoDB', level: 85 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'CI/CD', level: 78 },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-grid">
          <AnimatedSection>
            <div className="photo-container">
              <div className="photo-wrapper">
                <img src={myPic} alt="Aniah Brown" className="about-photo" />
              </div>
              <div className="experience-badge">
                <p className="exp-number">1+ Year</p>
                <p className="exp-label">Experience</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-left">
            <div className="info-container">
              <h2 className="info-title">About Me</h2>
              <div className="info-text">
                <p>
                  Passionate full-stack developer from Baltimore, Maryland, dedicated to crafting engaging user experiences.
                  With a strong foundation in both frontend and backend development, I build responsive, visually appealing websites and robust, scalable applications.
                  My expertise spans server-side logic, API integrations, and data management, ensuring seamless performance and functionality.
                  I thrive on collaboration and continuous learning, eagerly contributing to innovative projects while further honing my craft.
                </p>
              </div>
              <div className="stats">
                <div className="stat-card">
                  <p className="stat-number">5+</p>
                  <p className="stat-label">Projects</p>
                </div>
              </div>
              <div className="badges">
                <Badge className="badge">Available for Hire</Badge>
                <Badge variant="secondary" className="badge">Remote Work</Badge>
                <Badge variant="outline" className="badge">Relocation Open</Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="skills-section">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h4 className="skill-group-title">{group.category}</h4>
                <div className="skill-list">
                  {group.technologies.map((tech) => (
                    <div key={tech.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{tech.name}</span>
                        <span className="skill-level">{tech.level}%</span>
                      </div>
                      <Progress value={tech.level} className="skill-progress" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
