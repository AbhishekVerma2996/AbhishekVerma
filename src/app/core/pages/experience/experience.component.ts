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
      startTime: new Date('2022-02-7'),
      endTime: Date.now(),
    },
    {
      companyName: 'Ommzi Solutions Pvt Ltd',
      companyLogo:
        'https://www.ommzi.com/wp-content/uploads/2017/07/logo.png',
      responsibility:
        'Worked on the UI design, setting up different environments and game stages.',
      designation: 'Frontend Game Developer',
      techStack: [
        {
          icon: 'code',
          label: 'C#',
        },
        // {
        //   icon: 'bootstrap',
        //   label: 'Bootstrap',
        // },
      ],
      startTime: new Date('2018-07-08'),
      endTime: new Date('2019-02-21'),
    },
    {
      companyName: 'Quark Software Inc.',
      companyLogo:
        'https://www.quark.com/assets/LOGO-RGB_Quark-Corporate-2023_DARK-R_v7-2.webp',
      responsibility:
        'Worked on QuarkXPress, a page layout and graphic design software used for creating and publishing materials across print, web, e-readers, and other digital media, supporting 21 languages',
      designation: 'Software Developer - Internship',
      techStack: [
        {
          icon: 'code',
          label: 'C++',
        },
        // {
        //   icon: 'firebase',
        //   label: 'Firebase',
        // },
        // {
        //   icon: 'bootstrap',
        //   label: 'Bootstrap',
        // },
      ],
      startTime: new Date('2018-01-01'),
      endTime: new Date('2018-06-30'),
    },
  ];

  experienceSection = computed(() => {
    if (this.responsiveService.$xLarge() || this.responsiveService.$large()) {
      return 'experience_section';
    }
    return 'experience_section_sm';
  });
}
