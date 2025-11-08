
//Loading indicator component
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
  <div>Loading...</div>
  `,
  styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
