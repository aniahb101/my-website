
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Flower, Leaf } from 'lucide-react';

const FlowerDecoration = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none opacity-50 ${className}`}>
    <div className="relative">
      <Flower className="text-primary/40 animate-pulse-subtle" size={26} />
    </div>
  </div>
);

const LeafDecoration = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none opacity-50 ${className}`}>
    <div className="relative animate-sway">
      <Leaf className="text-secondary-foreground/30" size={24} />
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
          
          // Update URL without reload
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      {/* Flower decorations */}
      <FlowerDecoration className="top-[10%] left-[5%]" />
      <FlowerDecoration className="top-[20%] right-[8%]" />
      <FlowerDecoration className="bottom-[30%] left-[12%]" />
      <FlowerDecoration className="bottom-[15%] right-[10%]" />
      
      {/* Leaf decorations */}
      <LeafDecoration className="top-[35%] left-[3%]" />
      <LeafDecoration className="top-[40%] right-[4%]" />
      <LeafDecoration className="bottom-[25%] left-[6%]" />
      <LeafDecoration className="bottom-[20%] right-[7%]" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
