import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Application Todo List',
      description: 'Application full-stack de gestion de tâches avec Angular et Spring Boot. Features: CRUD complet, authentification, interface responsive.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      image: 'assets/todo-app.jpg',
      githubUrl: 'https://github.com/tonusername/todo-app',
      demoUrl: 'https://todo-app-demo.netlify.app'
    },
    {
      title: 'Portfolio Personnel',
      description: 'Ce portfolio même ! Développé avec Angular et Materialize. Design moderne et responsive.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Materialize'],
      image: 'assets/portfolio.jpg',
      githubUrl: 'https://github.com/tonusername/portfolio',
      demoUrl: 'https://tonportfolio.netlify.app'
    },
    {
      title: 'API REST Spring Boot',
      description: 'API RESTful pour application e-commerce avec JWT, Spring Security et documentation Swagger.',
      technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
      image: 'assets/api-rest.jpg',
      githubUrl: 'https://github.com/tonusername/api-ecommerce'
    }
  ];

  // Méthode pour gérer les erreurs d'image
  handleImageError(event: any, project: Project) {
    console.warn(`Image non trouvée: ${project.image}`);
    event.target.src = 'assets/placeholder-project.jpg';
    project.image = 'assets/placeholder-project.jpg';
  }

  // Méthode pour scroll vers la section contact
  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.location.hash = section;
    }
  }
}
