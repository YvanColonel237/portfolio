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
      image: 'assets/java.PNG',
      githubUrl: 'https://github.com/YvanColonel237/open-exam-frontend',
      demoUrl: 'https://todo-app-demo.netlify.app'


    },
    {
      title: 'Portfolio Personnel',
      description: 'Ce portfolio même ! Développé avec Angular et Materialize. Design moderne et responsive.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Materialize'],
      image: 'assets/angular.PNG',
      githubUrl: 'https://github.com/YvanColonel237/portfolio',
      demoUrl: 'https://tonportfolio.netlify.app'
    },
    {
      title: 'API REST Spring Boot',
      description: 'API RESTful pour application e-commerce avec JWT, Spring Security et documentation Swagger.',
      technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
      image: 'assets/Githup.PNG',
      githubUrl: 'https://github.com/YvanColonel237/Sentiment-Analysis-with-Spring-Boot-framworl'
    }
  ];

  // Méthode pour gérer les erreurs d'image
  handleImageError(event: any, project: Project) {
    console.warn(`Image non trouvée: ${project.image}`);
    event.target.src = 'assets/IMG_20250525_084706_041.jpg';
    project.image = 'assets/IMG_20250525_084706_041.jpg';
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
