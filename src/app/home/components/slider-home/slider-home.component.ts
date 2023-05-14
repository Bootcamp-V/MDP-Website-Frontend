import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IContentHome } from '../../models/content-home.interface';
import { ContentHomeService } from '../../services/content-home.service';
declare const window: Window;
@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss'],
})
export class SliderHomeComponent implements OnInit, OnDestroy {
 
  slides!: IContentHome;
  currentIndex: number = 0;
  timeoutId?: number;

  datahome$!: Observable<IContentHome>;

  constructor(private serv: ContentHomeService) { }
  ngOnInit(): void {
    this.datahome$ = this.serv.getContentHomeByLocate('slider');
    this.datahome$.subscribe(res => this.slides = res);
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
      ? this.slides.data.length - 1
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
    const isLastSlide = this.currentIndex === this.slides.data.length - 1;
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

  scrollDown() {
    window.scrollBy({
      top: 500, // ajusta la cantidad de desplazamiento según tus necesidades
      left: 0,
      behavior: 'smooth', // agrega un efecto de desplazamiento suave
    });
  }
}
