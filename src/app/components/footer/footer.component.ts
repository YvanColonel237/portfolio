import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) {}

  // Méthode corrigée pour la navigation
  scrollToSection(section: string): void {
    // Navigue d'abord vers la racine avec le fragment
    this.router.navigate(['/'], { fragment: section }).then(() => {
      // Scroll manuel après la navigation
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    });
  }
}
