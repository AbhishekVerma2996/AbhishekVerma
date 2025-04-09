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
    if (this.responsiveService.$large()) {
      return 'mat-mdc-card-xl-image';
    }
    return 'img_sm';
  });

  public textSize = computed(() => {
    if (this.responsiveService.$large()) {
      return 'intro_title';
    }
    return 'intro_title_sm';
  });

  public gridOrder = computed(() => {
    if (this.responsiveService.$large()) {
      return '';
    }
    return 'order_last';
  });

  socialMedia = [
    {
      icon: 'facebook',
      link: 'https://facebook.com',
      type: '',
    },
    {
      icon: 'linkedin',
      link: 'https://facebook.com',
      type: 'outlined_mini_fab',
    },
    {
      icon: 'instagram',
      link: 'https://facebook.com',
      type: 'outlined_mini_fab',
    },
  ];

  skills = [
    {
      skill: 'ASPNET Core Web API',
      icon: 'dotnet',
    },
    {
      skill: 'Firebase',
      icon: 'firebase',
    },
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
    if (this.responsiveService.$large()) {
      return 'skill_sets';
    }
    return 'skill_sets_sm';
  });

  gridContainer = computed(() => {
    if (this.responsiveService.$large()) {
      return 'grid-container';
    }
    return 'grid-container_sm';
  });
}
