import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-select-images',
  imports: [],
  templateUrl: './select-images.component.html',
  styleUrl: './select-images.component.css',
})
export class SelectImagesComponent implements OnInit {
  images = signal<string[]>(["cat1.avif", "cat2.webp", "cat3.webp", "image1.jpeg", "image2.png", "image3.jpg"])

  ngOnInit(): void {
    
  }
}
