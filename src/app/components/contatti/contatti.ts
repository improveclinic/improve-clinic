import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contatti',
  imports: [FormsModule],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti implements OnInit {

  showAlert: boolean = false;
  alertMessage: string = '';

  private service_id = 'service_q6ounjs';
  private template_id = 'template_5fpn694';
  private public_key = 'RGz_4DKwR9cexmdMC';

  name: string = '';
  email: string = '';
  phone: string = '';
  notes: string = '';

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);

    this.seoService.setSeoData({
      title: 'Contatti | Improve Clinic Rovereto',
      description: 'Contatta Improve Clinic Rovereto. Numero di telefono, email, indirizzo e modulo di contatto per qualsiasi informazione.',
      keywords: 'contatti, telefono, email, indirizzo, Rovereto, contattaci',
      url: 'https://improveclinic.it/contatti'
    });
  }

  private validateFields(): string | null {

    if (!this.name.trim()) {
      return 'Inserisci il nome';
    }

    if (this.name.trim().length < 3) {
      return 'Il nome deve essere di almeno 3 caratteri';
    }

    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(this.name)) {
      return 'Il nome può contenere solo lettere e spazi';
    }

    if (this.name.length > 50) {
      return 'Il nome è troppo lungo';
    }

    if (!this.email.trim()) {
      return 'Inserisci l\'email';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      return 'Email non valida';
    }

    if (this.email.length > 100) {
      return 'Email troppo lunga';
    }

    if (!this.phone.trim()) {
      return 'Inserisci il telefono';
    }

    if (!/^[0-9+\- ]{7,15}$/.test(this.phone)) {
      return 'Telefono non valido';
    }

    if (this.notes.length > 500) {
      return 'Le note sono troppo lunghe';
    }

    if (!this.notes.trim()) {
      return 'Inserisci il corpo del testo';
    }

    return null;
  }

  async sendEmail(form: NgForm): Promise<void> {

    const error = this.validateFields();

    if (error) {
      this.alertMessage = error;
      this.showAlert = true;
      return;
    }

    try {

      await emailjs.send(
        this.service_id,
        this.template_id,
        {
          name: this.name,
          email: this.email,
          phone: this.phone,
          notes: this.notes
        },
        {
          publicKey: this.public_key
        }
      );

      // Reset completo del form
      form.resetForm();

      // Reset delle variabili
      this.name = '';
      this.email = '';
      this.phone = '';
      this.notes = '';

      // Messaggio di successo
      this.alertMessage = 'Email inviata con successo!';
      this.showAlert = true;

    } catch (error) {

      console.error('Errore EmailJS:', error);

      this.alertMessage = 'Qualcosa è andato storto. Riprova più tardi.';
      this.showAlert = true;
    }
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}