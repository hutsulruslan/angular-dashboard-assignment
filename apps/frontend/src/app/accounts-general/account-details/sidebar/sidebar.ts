import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  openedSection: string | null = 'decision';

  toggleSection(section: string) {
    this.openedSection = this.openedSection === section ? null : section;
  }
}
