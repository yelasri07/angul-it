import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ErrorAlertComponent } from "../error-alert.component/error-alert.component";
import { NavigateButtonComponent } from "../navigate-button.component/navigate-button.component";

@Component({
  selector: 'app-select-images',
  imports: [ReactiveFormsModule, NgClass, ErrorAlertComponent, NavigateButtonComponent],
  templateUrl: './select-images.component.html',
  styleUrl: './select-images.component.css',
})
export class SelectImagesComponent implements OnInit {
  @Output()
  nextLevel = new EventEmitter<number>();

  @Output()
  nbOfFails = new EventEmitter();

  images = signal<string[]>([])

  form = new FormGroup([
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false)
  ]);

  ngOnInit(): void {
    let isContainCat = false
    for (let i = 0; i < 6; i++) {
      let nb = this.getRandomNumber(2)
      if (nb === 1) {
        isContainCat = true
        this.images().push(`cat${this.getRandomNumber(6)}.png`)
      } else {
        this.images().push(`image${this.getRandomNumber(6)}.png`)
      }
    }

    if (!isContainCat) {
      let nb = this.getRandomNumber(6) - 1
      this.images()[nb] = `cat${this.getRandomNumber(6)}.png`
    }
  }

  onSubmit() {
    if (this.images().length == 0) return;

    this.form.setErrors(null)
    this.images().forEach((ele, i) => {
      if ((ele.startsWith("cat") && !this.form.controls[i].value) || (!ele.startsWith("cat") && this.form.controls[i].value)) {
        this.form.setErrors({ "error": "Please select all images with cats." })
        return;
      }
    })

    if (this.form.invalid) {
      this.nbOfFails.emit()
      return
    }

    this.nextLevel.emit(2)
  }

  isChecked(index: number) {
    return this.form.controls[index].value
  }

  private getRandomNumber(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }
}
