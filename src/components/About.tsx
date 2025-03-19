
import AnimatedSection from './AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    category: 'Database & Tools',
    technologies: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'CI/CD', level: 78 },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-square max-w-md rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  About Photo
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 p-4 lg:p-6 bg-card rounded-xl shadow-xl border border-border/50 max-w-xs">
                <p className="text-lg font-medium mb-1">3+ Years Experience</p>
                <p className="text-muted-foreground text-sm">
                  Working with modern web technologies and building scalable applications
                </p>
              </div>
              <div className="absolute -z-10 -inset-4 rounded-2xl border border-border/50" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-left">
            <div>
              <h2 className="text-balance font-bold mb-6">About Me</h2>
              <div className="space-y-4 mb-8">
                <p>
                  I'm a passionate software engineer specializing in building exceptional digital experiences. With a 
                  strong foundation in both frontend and backend technologies, I create applications 
                  that are not only functional but also intuitive and accessible.
                </p>
                <p>
                  My background in computer science, combined with continuous learning and 
                  real-world project experience, allows me to tackle complex problems 
                  and deliver high-quality solutions.
                </p>
                <p>
                  I thrive in collaborative environments and enjoy the process of transforming 
                  ideas into well-crafted code. My goal is to create software that makes a 
                  positive impact and provides value to users.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 border border-border/50 rounded-lg">
                  <p className="text-4xl font-bold text-primary mb-1">20+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="p-4 border border-border/50 rounded-lg">
                  <p className="text-4xl font-bold text-primary mb-1">10+</p>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="p-4 border border-border/50 rounded-lg">
                  <p className="text-4xl font-bold text-primary mb-1">3+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>

              <div className="space-y-1 flex flex-wrap gap-2">
                <Badge className="rounded-full">Available for Hire</Badge>
                <Badge variant="secondary" className="rounded-full">Remote Work</Badge>
                <Badge variant="outline" className="rounded-full">Relocation Open</Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category} className="p-6 rounded-xl border border-border/50 bg-card">
                <h4 className="text-lg font-semibold mb-4">{group.category}</h4>
                <div className="space-y-4">
                  {group.technologies.map((tech) => (
                    <div key={tech.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span>{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <Progress value={tech.level} className="h-1.5" />
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
