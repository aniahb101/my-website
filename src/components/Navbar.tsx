import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import '../components/css/Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn('navbar', isScrolled ? 'scrolled' : 'transparent')}>
      <div className="navbar-container">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo">
            <span>Aniah</span>Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="navbar-link">
                {link.name}
              </a>
            ))}
            <Button asChild className="navbar-btn">
              <a href="#contact">Let's Talk</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-button"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="icon" />
            ) : (
              <Menu className="icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn('navbar-mobile-menu', mobileMenuOpen ? 'open' : 'closed')}
      >
        <nav className="navbar-mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-mobile-link"
              onClick={handleNavLinkClick}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="navbar-mobile-btn">
            <a href="#contact" onClick={handleNavLinkClick}>
              Let's Talk
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
