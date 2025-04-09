import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponsiveService } from '../../services/responsive.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    FooterComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
  private iconRegistry = inject(MatIconRegistry);
  private responsiveService = inject(ResponsiveService);

  navlinks = [
    {
      label: 'Home',
      icon: 'home',
      link: '/',
    },
    {
      label: 'About',
      icon: 'person',
      link: '/about-me',
    },
    {
      label: 'My projects',
      icon: 'project',
      link: '/my-projects',
    },
    {
      label: 'Contact me',
      icon: 'message',
      link: '/contact-me',
    },
  ];

  private icons = [
    {
      svg: '/assets/icons/home.svg',
      name: 'home',
    },
    {
      svg: '/assets/icons/person.svg',
      name: 'person',
    },
    {
      svg: '/assets/icons/message.svg',
      name: 'message',
    },
    {
      svg: '/assets/icons/project.svg',
      name: 'project',
    },
    {
      svg: '/assets/icons/download.svg',
      name: 'download',
    },
    {
      svg: '/assets/icons/facebook.svg',
      name: 'facebook',
    },
    {
      svg: '/assets/icons/linkedin.svg',
      name: 'linkedin',
    },
    {
      svg: '/assets/icons/instagram.svg',
      name: 'instagram',
    },
    {
      svg: '/assets/icons/dotnet.svg',
      name: 'dotnet',
    },
    {
      svg: '/assets/icons/angular.svg',
      name: 'angular',
    },
    {
      svg: '/assets/icons/bootstrap.svg',
      name: 'bootstrap',
    },
    {
      svg: '/assets/icons/nextjs.svg',
      name: 'nextjs',
    },
    {
      svg: '/assets/icons/reactjs.svg',
      name: 'reactjs',
    },
    {
      svg: '/assets/icons/tailwindcss.svg',
      name: 'tailwindcss',
    },
    {
      svg: '/assets/icons/firebase.svg',
      name: 'firebase',
    },
  ];

  sidenaveBehaviour = computed(() => {
    if (this.responsiveService.$large()) {
      return 'side';
    }
    return 'over';
  });

  isOpened = computed(() => this.responsiveService.$large());

  ngOnInit(): void {
    // ======Register custom icons=========
    this.icons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.svg)
      );
    });
  }
}
