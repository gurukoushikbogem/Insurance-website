import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expert-team.component.html',
  styleUrl: './expert-team.component.css',
})
export class ExpertTeamComponent {
  teamMembers = [
    {
      name: 'Mesiva Sccot',
      title: 'Marketing Ex.',
      image: 'assets/mesiva.jpg',
      socialIcons: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Jason Thomson',
      title: 'Marketing Ex.',
      image: 'assets/jason.jpg',
      socialIcons: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Kohn Wright',
      title: 'Marketing Ex.',
      image: 'assets/kohn.jpg',
      socialIcons: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Andrew Schimke',
      title: 'Marketing Ex.',
      image: 'assets/andrew.jpg',
      socialIcons: [
        { iconClass: 'fab fa-facebook', link: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', link: 'https://twitter.com' },
        { iconClass: 'fab fa-instagram', link: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', link: 'https://linkedin.com' },
      ],
    }
  ];
}
