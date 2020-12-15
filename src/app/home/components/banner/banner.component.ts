import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/banner1.jpg',
    'assets/banner2.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
