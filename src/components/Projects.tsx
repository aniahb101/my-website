
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with shopping cart, payment processing, and order management.',
    image: 'https://placehold.co/600x400/e9ecef/6c757d',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
    image: 'https://placehold.co/600x400/e9ecef/6c757d',
    tags: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'Social Media API',
    description: 'RESTful API for a social media application with authentication, posts, comments, and user profiles.',
    image: 'https://placehold.co/600x400/e9ecef/6c757d',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'backend',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'A weather application that shows current conditions and forecasts for any location with a clean UI.',
    image: 'https://placehold.co/600x400/e9ecef/6c757d',
    tags: ['React', 'API Integration', 'CSS Modules'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'frontend',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <AnimatedSection
      className="group relative bg-card rounded-lg overflow-hidden border border-border/50 h-full flex flex-col"
      delay={index * 100}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          <Button variant="outline" size="sm" className="group/btn rounded-full" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              <span>Code</span>
            </a>
          </Button>
          <Button size="sm" className="group/btn rounded-full" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
              <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="section bg-secondary/50">
      <div className="section-inner">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-balance font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg">
            A collection of my recent work and personal projects that showcase my skills and experience.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="rounded-full bg-secondary">
                <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
                <TabsTrigger value="frontend" className="rounded-full">Frontend</TabsTrigger>
                <TabsTrigger value="backend" className="rounded-full">Backend</TabsTrigger>
                <TabsTrigger value="fullstack" className="rounded-full">Full Stack</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>

        <AnimatedSection delay={300} className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              <span>See More on GitHub</span>
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
