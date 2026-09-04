import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy implements OnInit {

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
