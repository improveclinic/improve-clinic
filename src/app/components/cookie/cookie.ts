import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-cookie',
  imports: [],
  templateUrl: './cookie.html',
  styleUrl: './cookie.css',
})
export class Cookie implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {

    window.scroll(0, 0);

    this.seoService.setSeoData({
      title: 'Cookie Policy | Improve Clinic Rovereto',
      description: 'La cookie policy di Improve Clinic',
      keywords: 'cookie, policy',
      url: 'https://improveclinic.it/cookie-policy'
    });

  }

}