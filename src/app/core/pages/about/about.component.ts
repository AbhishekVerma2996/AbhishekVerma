import { Component, computed, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  imports: [NgClass, MatCardModule],
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
      companyName: 'Koshur Store',
      responsibility:
        'Creating the pages in ReactJs for the store app and handling the backend in firebase. Whole application is based on online store to deliver the items to customer.',
      designation: 'Junior ReactJs Developer - Internship',
    },
    {
      companyName: 'DZentra Pvt Ltd',
      responsibility: '',
      designation: 'ReactJs Developer - Internship',
    },
    {
      companyName: 'de facto Infotech',
      responsibility: '',
      designation: 'Fullstack developer - Fulltime',
    },
  ];
}
