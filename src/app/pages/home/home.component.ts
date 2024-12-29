import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.muted = true;
      this.videoPlayer.nativeElement.play().catch(error => {
        console.log("Error reproduciendo el video:", error);
      });
    }
  }
}
