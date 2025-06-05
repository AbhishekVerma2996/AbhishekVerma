import { Component, computed, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-projects',
  imports: [NgClass, MatCardModule, MatListModule, MatIconModule, DatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  private responsiveService = inject(ResponsiveService);

  public textSize = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'intro_title';
    }
    return 'intro_title_sm';
  });

  public projects = [
    {
      companyName: 'de facto Infotech',
      projectTitle: 'SQL GIG Monitoring Tool Project',
      companyLogo:
        'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2RlLWZhY3RvLWluZm90ZWNoLmpwZw.png',
      projDescription:
        'SQL GIG offers real-time insights into server and database performance, enabling proactive issue detection, minimizing downtime, and ensuring robust security across infrastructure.',
      designation: 'Frontend Developer - Fulltime',
      workList: [
        'Developed a user-friendly interface for monitoring SQL and Windows Server performance.', ],
      startTime: new Date('2024-03-12'),
      endTime: Date.now(),
    },
    {
      companyName: 'de facto Infotech',
      projectTitle: 'MXBuild Project',
      companyLogo:
        'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2RlLWZhY3RvLWluZm90ZWNoLmpwZw.png',
      projDescription:
        'MXBuild is dedicated to transforming how construction companies manage their finances by providing an all-in-one solution that streamlines financial management, allowing users to focus on their core work.',
      designation: 'Full-Stack Developer - Fulltime',
      workList: [
        'Developed a user-friendly interface for managing construction projects and finances.',
        'Implemented features for tracking expenses, budgets, and financial reports.',
        'Ensured data security and integrity through robust backend development.',
      ],
      startTime: new Date('2022-04-10'),
      endTime: new Date('2024-01-1'),
    },
    {
      companyName: 'Ommzi Solutions Pvt Ltd',
      companyLogo:
        'https://www.ommzi.com/wp-content/uploads/2017/07/logo.png',
      projectTitle: 'Sardar-Ji Game (Version 2)',
      projDescription:
        'Sardar-Ji Game is a fun and engaging game that allows players to experience the life of a Sardar who ran and tackle various challenges and tasks.',
      designation: 'Frontend Game Developer',
      workList: [
        'Developed the user interface for the game, ensuring an engaging and intuitive experience.',
        'Set up various game environments and stages to enhance gameplay.',
        'Collaborated with the backend team to integrate game logic and features.',
      ],
     
      startTime: new Date('2018-09-01'),
      endTime: new Date('2019-02-21'),
    },
  ];

  experienceSection = computed(() => {
    if (this.responsiveService.$xLarge() || this.responsiveService.$large()) {
      return 'experience_section';
    }
    return 'experience_section_sm';
  });
}
