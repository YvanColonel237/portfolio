import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
