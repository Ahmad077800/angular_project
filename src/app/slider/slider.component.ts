import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule], // إضافة CommonModule هنا
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images: string[] = [
    'assets/image/c1.jpg',
    'assets/image/c2.jpg',
    'assets/image/c3.jfif'
  ];
  currentImageIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 10000); // تغيير الصورة كل 10 ثوانٍ
  }
}
