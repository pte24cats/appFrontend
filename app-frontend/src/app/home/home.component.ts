import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule,
    AppComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('slideshowInner') slideshowInner!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const slideshowInner = this.slideshowInner.nativeElement;
    let scrollAmount = 0;
    const slideWidth = slideshowInner.querySelector('.slide').offsetWidth + 10;
    const totalWidth = slideWidth * slideshowInner.children.length;

    const slideShow = () => {
      scrollAmount += slideWidth;
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
      this.renderer.setStyle(slideshowInner, 'transform', `translateX(-${scrollAmount}px)`);
    };

    setInterval(slideShow, 2000);
  }
}
