import { Component, computed, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [NgClass, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private responsiveService = inject(ResponsiveService);

  public textSize = computed(() => {
    if (this.responsiveService.$large()) {
      return 'intro_title';
    }
    return 'intro_title_sm';
  });

  public experiences = [
    {
      companyName: 'de facto Infotech',
      responsibility:
        '.NET Developer, responsible to handle the ASPNET Core Web API and web application build up with different frontend frameworks.',
      designation: 'Fullstack developer - Fulltime',
      techStack: [
        {
          icon: 'nextjs',
          label: 'NextJs',
        },
        {
          icon: 'angular',
          label: 'Angular',
        },
        {
          icon: 'dotnet',
          label: 'ASPNET Core Web API',
        },
        {
          icon: 'tailwindcss',
          label: 'Tailwindcss',
        },
        {
          icon: 'angular',
          label: 'Angular Material',
        },
      ],
    },
    {
      companyName: 'DZentra Pvt Ltd',
      responsibility:
        'Create a monitoring tool dashboard, Create charts and visual graphics for the dashboard.',
      designation: 'ReactJs Developer - Internship',
      techStack: [
        {
          icon: 'reactjs',
          label: 'ReactJs',
        },
        {
          icon: 'bootstrap',
          label: 'Bootstrap',
        },
      ],
    },
    {
      companyName: 'Koshur Store',
      responsibility:
        'Creating the pages in ReactJs for the store app and handling the backend in firebase. Whole application is based on online store to deliver the items to customer.',
      designation: 'Junior ReactJs Developer - Internship',
      techStack: [
        {
          icon: 'reactjs',
          label: 'ReactJs',
        },
        {
          icon: 'firebase',
          label: 'Firebase',
        },
        {
          icon: 'bootstrap',
          label: 'Bootstrap',
        },
      ],
    },
  ];
}
