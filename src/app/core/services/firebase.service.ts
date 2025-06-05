import { Injectable } from '@angular/core';
import { collection, addDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: Firestore) { }

  async submitResponse(response: { name: string; email: string; website?: string; message: string }) {
    try {
      const contactsRef = collection(this.firestore, 'contacts');

      await addDoc(contactsRef, response);
    } catch (error) {
      console.log(error);
    }
  }
}

