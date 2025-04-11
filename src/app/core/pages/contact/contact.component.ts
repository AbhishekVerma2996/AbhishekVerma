import { Component, computed, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [
    NgClass,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private responsiveService = inject(ResponsiveService);

  gridContainer = computed(() => {
    if (this.responsiveService.$large() || this.responsiveService.$xLarge()) {
      return 'contact_section';
    }
    return 'contact_section_sm';
  });

  socialMedia = [
    {
      icon: 'facebook',
      link: 'https://facebook.com',
      type: 'social_media',
    },
    {
      icon: 'linkedin',
      link: 'https://facebook.com',
      type: 'outlined_mini_fab social_media',
    },
    {
      icon: 'instagram',
      link: 'https://facebook.com',
      type: 'outlined_mini_fab social_media',
    },
  ];
}
