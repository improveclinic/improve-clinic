import { Component, HostListener, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-galleria',
  imports: [],
  templateUrl: './galleria.html',
  styleUrl: './galleria.css',
})
export class Galleria implements OnInit {

  lightboxOpen = false;
  currentImage = 0;

  images = [
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Custom Blackwork',
      type: 'large'
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: 'tall'
    },
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Custom Blackwork',
      type: 'large'
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: 'tall'
    },
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Custom Blackwork',
      type: 'large'
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: 'tall'
    },
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Custom Blackwork',
      type: 'large'
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: 'tall'
    },
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Custom Blackwork',
      type: 'large'
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: 'tall'
    },
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Custom Blackwork',
      type: 'large'
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: 'tall'
    },
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Custom Blackwork',
      type: 'large'
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: 'tall'
    },
    {
      src: '/noi.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    },
    {
      src: '/vittoria.jpg',
      alt: 'Il lavoro con noi!',
      title: 'Black & Grey',
      type: ''
    }
  ];


  constructor(private seoService: SeoService) {}


  ngOnInit(): void {

    window.scroll(0, 0);

    this.seoService.setSeoData({
      title: 'Galleria | Improve Clinic Rovereto',
      description: 'Galleria delle immagini della Improve Clinic a Rovereto.',
      keywords: 'galleria, immagini, Improve Clinic, Rovereto',
      url: 'https://improveclinic.it/galleria'
    });

  }


  openLightbox(index: number): void {

    this.currentImage = index;
    this.lightboxOpen = true;

    document.body.style.overflow = 'hidden';

  }


  closeLightbox(): void {

    this.lightboxOpen = false;

    document.body.style.overflow = '';

  }


  nextImage(): void {

    this.currentImage =
      (this.currentImage + 1) % this.images.length;

  }


  previousImage(): void {

    this.currentImage =
      (this.currentImage - 1 + this.images.length) % this.images.length;

  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {

    if (!this.lightboxOpen) {
      return;
    }

    if (event.key === 'Escape') {
      this.closeLightbox();
    }

    if (event.key === 'ArrowRight') {
      this.nextImage();
    }

    if (event.key === 'ArrowLeft') {
      this.previousImage();
    }

  }

}
