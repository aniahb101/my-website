
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: 'https://github.com', label: 'GitHub' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@example.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-foreground font-medium text-xl mb-6">
            <span className="text-primary">Dev</span>Portfolio
          </a>

          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex gap-4 mb-8">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
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

          <div className="text-center text-muted-foreground text-sm">
            <p className="mb-1">
              &copy; {currentYear} DevPortfolio. All rights reserved.
            </p>
            <p>
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
