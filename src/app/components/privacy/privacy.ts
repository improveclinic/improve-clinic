import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {

    window.scroll(0, 0);

    this.seoService.setSeoData({
      title: 'Privacy Policy | Improve Clinic Rovereto',
      description: 'La privacy policy di Improve Clinic',
      keywords: 'privacy, policy',
      url: 'https://improveclinic.it/privacy-policy'
    });

  }

}