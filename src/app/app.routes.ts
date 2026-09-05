import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ChiSiamo } from './components/chi-siamo/chi-siamo';
import { Servizi } from './components/servizi/servizi';
import { Galleria } from './components/galleria/galleria';
import { Prenota } from './components/prenota/prenota';
import { Contatti } from './components/contatti/contatti';
import { NotFound } from './components/not-found/not-found';
import { Orario } from './components/orario/orario';
import { Vittoria } from './components/fisioterapisti/vittoria/vittoria';
import { Andrea } from './components/fisioterapisti/andrea/andrea';
import { Martina } from './components/fisioterapisti/martina/martina';
import { Matteo } from './components/fisioterapisti/matteo/matteo';
import { Simone } from './components/fisioterapisti/simone/simone';
import { Privacy } from './components/privacy/privacy';
import { Cookie } from './components/cookie/cookie';
import { Faq } from './components/faq/faq';

export const routes: Routes = [
  { path: '', component: Home },                              // Home
  { path: 'chi-siamo', component: ChiSiamo },                 // Chi siamo
  { path: 'servizi', component: Servizi },                    // Servizi
  { path: 'galleria', component: Galleria },                  // Galleria
  { path: 'prenota', component: Prenota },                    // Prenota
  { path: 'contatti', component: Contatti },                  // Contatti
  { path: 'orario', component: Orario },                      // Orario
  { path: 'fisioterapisti/vittoria', component: Vittoria },   // Vittoria
  { path: 'fisioterapisti/andrea', component: Andrea },       // Andrea
  { path: 'fisioterapisti/martina', component: Martina },     // Martina
  { path: 'fisioterapisti/matteo', component: Matteo },       // Matteo
  { path: 'fisioterapisti/simone', component: Simone },       // Simone
  { path: 'privacy-policy', component: Privacy },             // Privacy Policy
  { path: 'cookie-policy', component: Cookie },               // Cookie Policy
  { path: 'faq', component: Faq },                            // Faq
  { path: '**', component: NotFound }                         // 404
];
