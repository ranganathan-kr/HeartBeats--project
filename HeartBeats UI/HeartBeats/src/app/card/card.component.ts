import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  showContent1 = false;
  showContent2 = false;
  showContent3 = false;
  showContent4 = false;
  showContent5 = false;
  showContent6 = false;

  toggleContent1() {
    this.showContent1 = !this.showContent1;
  }
  toggleContent2() {
    this.showContent2 = !this.showContent2;
  }
  toggleContent3() {
    this.showContent3 = !this.showContent3;
  }
  toggleContent4() {
    this.showContent4 = !this.showContent4;
  }
  toggleContent5() {
    this.showContent5 = !this.showContent5;
  }
  toggleContent6() {
    this.showContent6 = !this.showContent6;
  }
}
