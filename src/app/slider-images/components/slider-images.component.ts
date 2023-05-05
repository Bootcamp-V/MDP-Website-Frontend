import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { SlideInterface } from '../types/slide.interface';

declare const window: Window; 

@Component({
  selector: 'slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.scss'],
})

export class SliderImagesComponent implements OnInit, OnDestroy {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;

    const bars = document.querySelectorAll(".dotsContainer__bar");
    bars.forEach((bar, index) => {
      if (index === newIndex) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    });
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;

    const bars = document.querySelectorAll(".dotsContainer__bar");
    bars.forEach((bar, index) => {
      if (index === newIndex) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    });
    
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;


    const bars = document.querySelectorAll(".dotsContainer__bar");
    bars.forEach((bar, index) => {
      if (index === slideIndex) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    });

  }
  
  

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  scrollDown() {
    window.scrollBy({
      top: 500, // ajusta la cantidad de desplazamiento según tus necesidades
      left: 0,
      behavior: 'smooth' // agrega un efecto de desplazamiento suave
    });
  }


 
}