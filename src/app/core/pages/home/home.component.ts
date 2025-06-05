import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, RouterLink, NgClass, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private responsiveService = inject(ResponsiveService);

  public imageSize = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'mat-mdc-card-xl-image';
    }
    return 'img_sm';
  });

  public textSize = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'intro_title';
    }
    return 'intro_title_sm';
  });

  public gridOrder = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return '';
    }
    return 'order_last';
  });

  socialMedia = [
    {
      icon: 'facebook',
      link: 'https://facebook.com',
      type: 'social_media',
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/abhishek-verma-b34113163',
      type: 'outlined_mini_fab social_media',
    },
    {
      icon: 'instagram',
      link: 'https://www.instagram.com',
      type: 'outlined_mini_fab social_media',
    },
  ];

  skills = [
    {
      skill: 'ASPNET Core Web API',
      icon: 'dotnet',
    },
    // {
    //   skill: 'Firebase',
    //   icon: 'firebase',
    // },
    {
      skill: 'Angular',
      icon: 'angular',
    },
    {
      skill: 'ReactJs',
      icon: 'reactjs',
    },
    {
      skill: 'NextJs',
      icon: 'nextjs',
    },
    {
      skill: 'Tailwindcss',
      icon: 'tailwindcss',
    },
    {
      skill: 'Bootstrap',
      icon: 'bootstrap',
    },
    {
      skill: 'Angular Material',
      icon: 'angular',
    },
  ];

  skillGrid = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'skill_sets';
    }
    return 'skill_sets_sm';
  });

  gridContainer = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'grid-container';
    }
    return 'grid-container_sm';
  });
}
