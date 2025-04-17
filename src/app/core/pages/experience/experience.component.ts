import { Component, computed, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-experience',
  imports: [NgClass, MatCardModule, MatListModule, MatIconModule, DatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private responsiveService = inject(ResponsiveService);

  public textSize = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'intro_title';
    }
    return 'intro_title_sm';
  });

  public experiences = [
    {
      companyName: 'de facto Infotech',
      companyLogo:
        'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2RlLWZhY3RvLWluZm90ZWNoLmpwZw.png',
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
      startTime: new Date('2023-01-23'),
      endTime: Date.now(),
    },
    {
      companyName: 'DZentra Pvt Ltd',
      companyLogo:
        'https://internshala.com/cached_uploads/logo/616a7589d7faa1634366857.png',
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
      startTime: new Date('2022-09-22'),
      endTime: new Date('2023-04-15'),
    },
    {
      companyName: 'Koshur Store',
      companyLogo:
        'https://images.yourstory.com/cs/images/companies/f34ce989c1be-download-1637763711440.jpg',
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
      startTime: new Date('2022-02-08'),
      endTime: new Date('2022-08-08'),
    },
  ];

  experienceSection = computed(() => {
    if (this.responsiveService.$xLarge() || this.responsiveService.$large()) {
      return 'experience_section';
    }
    return 'experience_section_sm';
  });
}
