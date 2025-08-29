import { Component, AfterViewInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initMaterialize();
  }

  private initMaterialize(): void {
    setTimeout(() => {
      try {
        const sidenav = document.querySelectorAll('.sidenav');
        if (typeof M !== 'undefined' && sidenav.length > 0) {
          M.Sidenav.init(sidenav, {});
        }
      } catch (error) {
        console.warn('Erreur initialisation Materialize:', error);
      }
    }, 300);
  }

  // Méthode de navigation PRINCIPALE
  scrollToSection(section: string, event?: Event): void {
    if (event) {
      event.preventDefault(); // Empêche le comportement par défaut
    }

    console.log('🔄 Navigation vers:', section);

    // Fermer le menu mobile
    this.closeMobileMenu();

    // Méthode garantie de scroll
    this.smoothScrollToSection(section);
  }

  private smoothScrollToSection(sectionId: string): void {
    // Essayer plusieurs méthodes pour être sûr

    // Méthode 1: Scroll natif
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('✅ Section trouvée:', sectionId);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });

      // Mettre à jour l'URL
      window.location.hash = sectionId;
      return;
    }

    // Méthode 2: Attendre que le DOM soit prêt
    setTimeout(() => {
      const retryElement = document.getElementById(sectionId);
      if (retryElement) {
        retryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.location.hash = sectionId;
      } else {
        console.error('❌ Section non trouvée:', sectionId);
        this.fallbackScroll(sectionId);
      }
    }, 100);
  }

  private fallbackScroll(sectionId: string): void {
    // Fallback ultime: scroll manuel
    const sections = {
      'hero': 0,
      'about': window.innerHeight,
      'projects': window.innerHeight * 2,
      'contact': window.innerHeight * 3
    };

    const position = sections[sectionId as keyof typeof sections] || 0;
    window.scrollTo({ top: position, behavior: 'smooth' });
    window.location.hash = sectionId;
  }

  private closeMobileMenu(): void {
    try {
      const sidenav = document.querySelector('.sidenav');
      if (sidenav && sidenav.classList.contains('active')) {
        const instance = M.Sidenav.getInstance(sidenav);
        if (instance) {
          instance.close();
        }
      }
    } catch (error) {
      console.warn('Erreur fermeture menu:', error);
    }
  }
}
