import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import '../components/css/Footer.css';

const socialLinks = [
  { icon: <Github className="icon" />, href: 'https://github.com/aniahb101', label: 'GitHub' },
  { icon: <Linkedin className="icon" />, href: 'https://www.linkedin.com/in/aniah-brown-06554ab9/', label: 'LinkedIn' },
  { icon: <Mail className="icon" />, href: 'mailto:aniah6767@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          <span className="logo-highlight">Aniah</span>Portfolio
        </a>

        <nav className="footer-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="footer-social">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              className="social-btn"
              asChild
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>

        <div className="footer-text">
          <p>&copy; {currentYear} AniahPortfolio. All rights reserved.</p>
          <p>Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
