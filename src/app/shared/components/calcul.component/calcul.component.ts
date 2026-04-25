import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigateButtonComponent } from "../navigate-button.component/navigate-button.component";
import { ErrorAlertComponent } from "../error-alert.component/error-alert.component";

@Component({
  selector: 'app-calcul',
  imports: [ReactiveFormsModule, NavigateButtonComponent, ErrorAlertComponent],
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css',
})
export class CalculComponent implements OnInit {
  @Output()
  nextLevel = new EventEmitter<number>();

  @Output()
  nbOfFails = new EventEmitter();

  firstNumber = signal(0)
  secondNumber = signal(0)

  form = new FormControl<any>('')

  ngOnInit(): void {
    this.firstNumber.set(this.getRandomInt())
    this.secondNumber.set(this.getRandomInt())
  }

  onSubmit(e: Event) {
    e.preventDefault()
    this.form.setErrors(null)
    let number = this.form.value

    if (!number || isNaN(number)) {
      this.form.setErrors({ "error": "Please provide a valid number." })
      this.nbOfFails.emit()
      return
    }

    number = parseFloat(number.toString())
    if (number !== (this.firstNumber() + this.secondNumber())) {
      this.form.setErrors({ "error": "Please provide a valid result." })
      this.nbOfFails.emit()
      return;
    }

    this.nextLevel.emit(3)
  }

  handlePrevious() {
    this.nextLevel.emit(1)
  }

  private getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
