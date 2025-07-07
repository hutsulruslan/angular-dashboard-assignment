import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyModel } from '../models/policy.model';
import { Badge } from '../../../shared/ui/badge/badge';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-policies-table-row',
  imports: [CommonModule, Badge, FaIconComponent],
  templateUrl: './policies-table-row.html',
  styleUrl: './policies-table-row.scss',
})
export class PoliciesTableRow {
  @Input() item!: PolicyModel;
  @Input() gridTemplateColumns!: string;

  getLossRatioColor(value: string): { bg: string; text: string } {
    const num = parseFloat(value.replace('%', ''));
    if (num < 35) return { bg: 'bg-green-500', text: 'text-white' };
    if (num < 65) return { bg: 'bg-yellow-400', text: 'text-black' };
    return { bg: 'bg-red-500', text: 'text-white' };
  }

  getIconColor(name: string): string {
    if (name.includes('Marine')) return 'text-blue-500';
    if (name.includes('Liability')) return 'text-green-400';
    if (name.includes('Workers')) return 'text-purple-400';
    if (name.includes('Umbrella')) return 'text-red-500';
    return 'text-white';
  }

  getIconName(name: string): string {
    switch (name) {
      case 'Marine Cargo':
        return 'ship';
      case 'General Liability':
        return 'shield-halved';
      case 'Workers Comp':
        return 'user-shield';
      case 'Umbrella':
        return 'shield-halved';
      default:
        return 'shield-halved';
    }
  }
}
