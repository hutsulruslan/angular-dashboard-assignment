import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-communication',
  imports: [CommonModule, UiCard, FaIconComponent],
  templateUrl: './communication.html',
  styleUrl: './communication.scss',
})
export class Communication {}
