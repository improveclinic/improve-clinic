import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  imports: [],
  templateUrl: './cookie.html',
  styleUrl: './cookie.css',
})
export class Cookie implements OnInit {

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
