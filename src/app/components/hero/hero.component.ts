import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  words: string[] = [
    'Développeur Angular',
    'Développeur Java/Spring Boot',
    'Passionné de Docker',
    'Passionné de MYSQL',
    'Développeur Full Stack'
  ];

  currentWord: string = '';
  private wordIndex: number = 0;
  private letterIndex: number = 0;
  private isDeleting: boolean = false;
  private typeSpeed: number = 150;
  private typingInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTypingEffect();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  // Méthode pour naviguer vers une section
  scrollToSection(section: string): void {
    // Solution 1: Navigation avec fragment (recommandée)
    this.router.navigate([], {
      fragment: section
    }).then(() => {
      // Scroll manuel après un petit délai
      setTimeout(() => {
        this.smoothScrollTo(section);
      }, 100);
    });

    // Solution alternative directe (décommente si la solution 1 ne marche pas):
    // this.smoothScrollTo(section);
  }

  // Méthode pour le scroll smooth
  private smoothScrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  private startTypingEffect(): void {
    this.type();
  }

  private type(): void {
    const current = this.wordIndex % this.words.length;
    const fullWord = this.words[current];

    if (this.isDeleting) {
      // Effacer une lettre
      this.currentWord = fullWord.substring(0, this.letterIndex - 1);
      this.letterIndex--;
    } else {
      // Ajouter une lettre
      this.currentWord = fullWord.substring(0, this.letterIndex + 1);
      this.letterIndex++;
    }

    let speed = this.typeSpeed;

    // Ajuster la vitesse
    if (this.isDeleting) {
      speed /= 2; // Plus rapide pour l'effacement
    }

    // Gérer les transitions entre les mots
    if (!this.isDeleting && this.currentWord === fullWord) {
      // Pause à la fin du mot
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentWord === '') {
      // Passer au mot suivant
      this.isDeleting = false;
      this.wordIndex++;
      speed = 500;
    }

    this.typingInterval = setTimeout(() => this.type(), speed);
  }
}
