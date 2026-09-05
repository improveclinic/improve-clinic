import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {

    window.scroll(0, 0);

    this.seoService.setSeoData({
      title: 'FAQ | Improve Clinic Rovereto',
      description: 'Domande frequenti di Improve Clinic',
      keywords: 'faq, domanda, risposta',
      url: 'https://improveclinic.it/faq'
    });

  }

}
