import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcul',
  imports: [ReactiveFormsModule],
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css',
})
export class CalculComponent implements OnInit {
  @Output()
  nextLevel = new EventEmitter<number>();

  firstNumber = signal(0)
  secondNumber = signal(0)

  form = new FormControl<any>('')

  ngOnInit(): void {
    this.firstNumber.set(this.getRandomInt())
    this.secondNumber.set(this.getRandomInt())
  }

  onSubmit() {
    this.form.setErrors(null)
    let number = this.form.value

    if (!number || isNaN(number)) {
      this.form.setErrors({ "error": "invalid number" })
      return
    }

    number = parseFloat(number.toString())
    if (number !== (this.firstNumber() + this.secondNumber())) {
      this.form.setErrors({ "error": "invalid result" })
      return;
    }

    this.nextLevel.emit(3)
  }

  private getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
