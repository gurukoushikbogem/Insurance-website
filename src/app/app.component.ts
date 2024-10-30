import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CalltoactionComponent } from './calltoaction/calltoaction.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { ExpertTeamComponent } from './expert-team/expert-team.component';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CalltoactionComponent,FooterComponent,CommonModule,HeroComponent,FeatureComponent,ExpertTeamComponent,AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'behance-clone';
}
