import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  // secretPass = 'Character';
  // show = true;

  // clickCounter = 0;

  // toggleInfo() {
  //   this.show = !this.show;

  //     if (this.show) {
  //       this.secretPass = 'Show';
  //     } else {
  //       this.secretPass = 'Hide';
  //   }
  // }

  // countClick() {
  //   this.clickCounter += 1;
  // }
}
