import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import '../components/css/Projects.css'; 

const projects = [
  {
    id: 1,
    title: 'The Beanery',
    description:
      'Responsive landing page for a virtual coffee shop featuring interactive recipes, detailed menu, and booking system.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D2DAQF30vz0yYyCTQ/profile-treasury-image-shrink_800_800/B4DZWsvNhlGcAc-/0/1742359813020?e=1742965200&v=beta&t=WNTtEvkHfmZmVFBv2Ggxi_0f6anzdJ_bhsTIb6UzVnY',
    tags: ['HTML', 'CSS'],
    liveUrl: 'https://aniahb101.github.io/se_project_coffeeshop/',
    githubUrl: 'https://github.com/aniahb101/se_project_coffeeshop',
    category: 'frontend',
  },
  {
    id: 2,
    title: 'Around the US',
    description:
      'Dynamic web application that allows users to add names, edit card content, and upload images within a responsive design.',
    image:
      'https://media.licdn.com/dms/image/v2/D4E2DAQGqOZZMyGZRsg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1712813688260?e=1742965200&v=beta&t=pnpA77cnbUsXW2V6DB07SknaRlESELIo7WRJ1RgvhY4',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://aniahb101.github.io/se_project_aroundtheus/',
    githubUrl: 'https://github.com/aniahb101/se_project_aroundtheus',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'The Flower Bed',
    description:
      'Interactive digital garden platform offering guides and tutorials for exploring spring flowers, developed during a collaborative code jam.',
    image:
      'https://media.licdn.com/dms/image/v2/D4E2DAQEM6WoK__OT3Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1712813959115?e=1742965200&v=beta&t=2oDRP7GBTkVsQ3vGno1u5XEdkQ00tqbTrk4vvPvD5xA',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://chadmcasey.github.io/TheFlowerBed/',
    githubUrl: 'https://github.com/ChadMCasey/TheFlowerBed',
    category: 'frontend',
  },
  {
    id: 4,
    title: 'WTWR',
    description:
      'Full-stack application delivering daily weather forecasts alongside personalized clothing recommendations.',
    image:
      'https://media.licdn.com/dms/image/v2/D4E2DAQG4itqYtEmSqw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719367494343?e=1742965200&v=beta&t=8Bhc4XRZIvKGcEy4rU0Y40QRqxnMJ6mdlMnnIU0-u6g',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://styleforecast.vercel.app/',
    githubUrl: 'https://github.com/aniahb101/se_project_react',
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'NewsExplorer',
    description:
      'Responsive news aggregator that lets users search, bookmark, and browse the latest articles from multiple sources.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D2DAQFU_uEqLbsdJQ/profile-treasury-image-shrink_800_800/B4DZWssOI9HAAY-/0/1742359030182?e=1742965200&v=beta&t=oQbwrWOFy72GcaOi4Dw8ueyRtCayx-v-u0B9wG6i7ME',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://aniahb101.github.io/news-explorer-frontend/',
    githubUrl:
      'https://github.com/aniahb101/news-explorer-frontend/tree/stage-1',
    category: 'frontend',
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => {
  return (
    <AnimatedSection className="project-card" delay={index * 100}>
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="project-tag">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="project-buttons">
          <Button variant="outline" size="sm" className="project-btn" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="project-btn-icon" />
              <span>Code</span>
            </a>
          </Button>
          <Button size="sm" className="project-btn" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
              <ArrowUpRight className="project-btn-icon live-icon" />
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <AnimatedSection className="projects-heading">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            A collection of my recent work and personal projects that showcase
            my skills and experience.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Tabs
            defaultValue="all"
            className="projects-tabs"
            onValueChange={setActiveTab}
          >
            <div className="projects-tab-list-container">
              <TabsList className="projects-tab-list">
                <TabsTrigger value="all" className="projects-tab-trigger">
                  All
                </TabsTrigger>
                <TabsTrigger value="frontend" className="projects-tab-trigger">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="projects-tab-trigger">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="fullstack" className="projects-tab-trigger">
                  Full Stack
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="projects-tab-content">
              <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>

        <AnimatedSection delay={300} className="projects-footer">
          <Button variant="outline" size="lg" className="projects-footer-btn" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="projects-footer-icon" />
              <span>See More on GitHub</span>
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
