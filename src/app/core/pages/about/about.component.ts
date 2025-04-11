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
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'intro_title';
    }
    return 'intro_title_sm';
  });

  aboutSection = computed(() => {
    if (this.responsiveService.$xLarge() || this.responsiveService.$large()) {
      return 'about_section';
    }
    return 'about_section_sm';
  });
}
