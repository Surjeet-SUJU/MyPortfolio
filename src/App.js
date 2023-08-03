import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    technologies: ['Java', 'CSS', 'HTML'],
    demoUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/Surjeet-SUJU/Students-Management-Portal',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/username/project2',
  },
];

function Project({ title, description, technologies, demoUrl, githubUrl }) {
  return (
    <motion.div
      className="project"
      whileHover={{ scale: 1.03, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)' }}
      >
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="project-links">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

function Education() {
	 return (
		<section>
			<h3>Holy Family E.M. School</h3>
			<h3>Uniitech Residential School</h3>
			<h3>Silicon Institute Of Technology</h3>
        </section>
	 );
}

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Passionate Engineering Student seeking internship. Committed to utilizing my skills to further the mission of my future workplace. Equipped with a promising skill-set. Bilingual, hardworking, and ready to join my next team.
          </p>
        </section>
        <ProjectsSection />
        <Education />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;
