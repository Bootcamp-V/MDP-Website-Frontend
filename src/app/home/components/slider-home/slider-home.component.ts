import { Component, OnDestroy, OnInit } from '@angular/core';
import { SlideInterface } from './model/slide.interface';
declare const window: Window;
@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss'],
})
export class SliderHomeComponent implements OnInit, OnDestroy {
  slides: SlideInterface[] = [
    { url: 'https://www.mdp.com.pe/wp-content/uploads/2018/08/Portada.png' },
    {
      url: 'https://www.mdp.com.pe/wp-content/uploads/2017/05/Portada_MDP.jpg',
    },
    {
      url: 'https://www.mdp.com.pe/wp-content/uploads/2017/05/nosotros_MDPAgil.jpg',
    },
  ];

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

    const bars = document.querySelectorAll('.dotsContainer__bar');
    bars.forEach((bar, index) => {
      if (index === newIndex) {
        bar.classList.add('active');
      } else {
        bar.classList.remove('active');
      }
    });
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;

    const bars = document.querySelectorAll('.dotsContainer__bar');
    bars.forEach((bar, index) => {
      if (index === newIndex) {
        bar.classList.add('active');
      } else {
        bar.classList.remove('active');
      }
    });
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;

    const bars = document.querySelectorAll('.dotsContainer__bar');
    bars.forEach((bar, index) => {
      if (index === slideIndex) {
        bar.classList.add('active');
      } else {
        bar.classList.remove('active');
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
      behavior: 'smooth', // agrega un efecto de desplazamiento suave
    });
  }
}
