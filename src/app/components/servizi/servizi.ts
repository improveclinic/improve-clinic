import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servizi',
  imports: [RouterLink],
  templateUrl: './servizi.html',
  styleUrl: './servizi.css',
})
export class Servizi implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoData({
      title: 'Servizi di Fisioterapia | Improve Clinic Rovereto',
      description: 'Scopri i nostri servizi di fisioterapia: riabilitazione, fisioterapia sportiva, terapie specializzate e programmi personalizzati a Rovereto.',
      keywords: 'servizi fisioterapia, riabilitazione, fisioterapia sportiva, terapie, Rovereto',
      url: 'https://improveclinic.it/servizi'
    });
  }

}
