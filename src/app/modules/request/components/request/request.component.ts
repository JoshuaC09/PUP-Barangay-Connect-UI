import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  animations: [
    trigger('stepAnimation', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0,
      })),
      state('*', style({
        transform: 'translateX(0%)',
        opacity: 1,
      })),
      transition('void => *', animate('1.8s ease-in-out')),
      transition('* => void', animate('1.8s ease-in-out'))
    ]),
  ],
})
export class RequestComponent {
  step = 1;

  ngOnInit() {
    this.animateSteps();
  }

  animateSteps() {
    setInterval(() => {
      this.step++;
      if (this.step > 4) {
        this.step = 1; // Restart the cycle
      }
    }, 5000); // 6 seconds for each step
  }
}
