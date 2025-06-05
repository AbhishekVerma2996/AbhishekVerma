import { Component, computed, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FirebaseService } from '../../services/firebase.service';

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
  private firebaseService = inject(FirebaseService);

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      website: [''],
      message: ['', Validators.required],
    });
  }

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

  // In your component
async onSubmit() {
  if (this.contactForm.valid) {
    try {
      await this.firebaseService.submitResponse(this.contactForm.value);
      alert('Message sent!');
      this.contactForm.reset();
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error(error);
    }
  }
}
}
