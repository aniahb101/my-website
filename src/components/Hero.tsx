
import { ArrowDown, GitHub, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  Software Engineer
                </span>
                <h1 className="text-balance font-bold mb-4">
                  Creating digital experiences through elegant code.
                </h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-lg">
                  I build modern, responsive web applications with a focus on performance, 
                  accessibility, and user experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  <GitHub className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2" animation="fade-in-left">
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay" />
                <div className="w-3/4 h-3/4 rounded-xl overflow-hidden">
                  {/* Replace with your photo */}
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                    Your Photo
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-primary/20 animate-pulse-subtle" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border border-primary/20 animate-pulse-subtle" style={{ animationDelay: '1s' }} />
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
          <a
            href="#projects"
            className="flex flex-col items-center text-foreground/60 hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
