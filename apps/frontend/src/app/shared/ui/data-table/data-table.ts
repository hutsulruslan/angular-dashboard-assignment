import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {
  @Input() title?: string;
  @Input() gridTemplateColumns = '1.5fr 2fr 1.5fr 1.2fr 1fr 40px';
}
