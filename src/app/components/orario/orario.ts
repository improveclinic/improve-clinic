import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { SeoService } from '../../services/seo.service';

interface OpeningHours {
  day: number; 
  times: { start: string; end: string }[]; 
}

@Component({
  selector: 'app-orario',
  imports: [],
  templateUrl: './orario.html',
  styleUrl: './orario.css',
})
export class Orario implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
    this.seoService.setSeoData({
      title: 'Orario | Improve Clinic Rovereto',
      description: 'Orario di apertura della Improve Clinic a Rovereto.',
      keywords: 'orario, apertura, Improve Clinic, Rovereto',
      url: 'https://improveclinic.it/orario'
    });
  }

  openingHours = signal<OpeningHours[]>([
    { day: 0, times: [] }, // Domenica
    { day: 1, times: [{ start: '09:00', end: '19:30' }] }, // Lunedì 
    { day: 2, times: [{ start: '09:00', end: '15:00' }] }, // Martedì
    { day: 3, times: [{ start: '09:00', end: '19:30' }] }, // Mercoledì
    { day: 4, times: [{ start: '09:00', end: '20:00' }] }, // Giovedì
    { day: 5, times: [{ start: '09:00', end: '19:00' }] }, // Venerdì
    { day: 6, times: [] }, // Sabato
  ]);

  // Signal per sapere se è aperto
  openNow: WritableSignal<boolean> = signal<boolean>(false);

  constructor(private seoService: SeoService) {
    this.updateOpenNow();
    setInterval(() => this.updateOpenNow(), 60000);
  }

  private updateOpenNow(): void {
    const now = new Date();
    const todayDay = now.getDay();
    const todayHours = this.openingHours().find(h => h.day === todayDay);

    if (!todayHours || todayHours.times.length === 0) {
      this.openNow.set(false); // chiuso tutto il giorno
      return;
    }

    const isOpen = todayHours.times.some(period => {
      const [startH, startM] = period.start.split(':').map(Number);
      const [endH, endM] = period.end.split(':').map(Number);

      const startDate = new Date(now);
      startDate.setHours(startH, startM, 0, 0);

      const endDate = new Date(now);
      endDate.setHours(endH, endM, 0, 0);

      return now >= startDate && now <= endDate;
    });

    this.openNow.set(isOpen);
  }

}
