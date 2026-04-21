import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-calcul',
  imports: [],
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css',
})
export class CalculComponent implements OnInit {
  firstNumber = signal(0)
  secondNumber = signal(0)

  ngOnInit(): void {
    this.firstNumber.set(this.getRandomInt())
    this.secondNumber.set(this.getRandomInt())
  }

  getRandomInt() {
  return Math.floor(Math.random() * 10) + 1;
}
}
