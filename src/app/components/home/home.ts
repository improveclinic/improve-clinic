import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.seoService.setSeoDataWithStructuredData(
      {
        title: 'Home | Fisioterapia Rovereto',
        description: 'Benvenuto a Improve Clinic Rovereto. Fisioterapia professionale, riabilitazione personalizzata e trattamenti avanzati. Prenota una consulenza oggi.',
        keywords: 'fisioterapia Rovereto, riabilitazione, clinica, fisioterapisti',
        url: 'https://improveclinic.it/'
      },
      this.seoService.getOrganizationSchema()
    );
  }
}