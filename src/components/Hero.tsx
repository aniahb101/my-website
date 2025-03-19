import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import '../components/css/Hero.css';
import mePhoto from '../components/photos/me.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient" />
        <div className="hero-circle" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <AnimatedSection className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                Software Engineer
              </div>
              <h1 className="hero-title">
                Creating digital experiences through elegant code.
              </h1>
              <p className="hero-description">
                I build modern, responsive web applications with a focus on performance,
                accessibility, and user experience.
              </p>

              <div className="hero-buttons">
                <Button asChild size="lg" className="hero-btn primary">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="hero-btn secondary">
                  <a
                    href="/Aniah Brown Resume 2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="hero-social">
                <a
                  href="https://github.com/aniahb101"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-icon"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/aniah-brown-06554ab9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="hero-image" animation="fade-in-left">
            <div className="image-wrapper">
              <div className="image-container">
                <img src={mePhoto} alt="My Photo" className="photo-image" />
              </div>
              <div className="decorative-circle" />
              <div className="decorative-circle delay" />
            </div>
          </AnimatedSection>
        </div>

        <div className="scroll-down">
          <a href="#projects" className="scroll-link">
            <span className="scroll-text">Scroll Down</span>
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
