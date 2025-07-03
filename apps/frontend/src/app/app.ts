import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [RouterModule, TopbarComponent, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'frontend';

  private fiIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'fas';
    this.fiIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
