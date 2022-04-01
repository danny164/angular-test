import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  slides = [
    { img: 'https://i.imgur.com/TOuKVDv.jpg' },
    { img: 'https://i.imgur.com/pe09jUQ.jpg' },
    { img: 'https://i.imgur.com/E5CCa3j.jpg' },
    { img: 'https://i.imgur.com/1uiG9Mp.jpg' },
    { img: 'https://i.imgur.com/w87A2jD.jpg' },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: true,
    arrows: true,
  };

  ngOnInit(): void {}
}
