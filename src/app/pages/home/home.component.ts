import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, UserComponent],
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
