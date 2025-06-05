import { Routes } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./core/pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
        title: 'AV | Home',
        data: { animation: 'HomePage' },
      },
      {
        path: 'about-me',
        loadComponent: () =>
          import('./core/pages/about/about.component').then(
            (c) => c.AboutComponent
          ),
        title: 'AV | About me',
        data: { animation: 'AboutPage' },
      },
      {
        path: 'my-experiences',
        loadComponent: () =>
          import('./core/pages/experience/experience.component').then(
            (c) => c.ExperienceComponent
          ),
        title: 'AV | My Experiences',
        data: { animation: 'ExperiencePage' },
      },
      {
        path: 'my-projects',
        loadComponent: () =>
          import('./core/pages/projects/projects.component').then(
            (c) => c.ProjectsComponent
          ),
        title: 'AV | My projects',
        data: { animation: 'ProjectsPage' },
      },
      {
        path: 'contact-me',
        loadComponent: () =>
          import('./core/pages/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
        title: 'AV | Contact me',
        data: { animation: 'ContactPage' },
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'AV | Page not found',
    data: { animation: 'PageNotFound' },
  },
];
