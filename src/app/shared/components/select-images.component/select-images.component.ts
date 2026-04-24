import { Component, EventEmitter, Output, signal } from '@angular/core';
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
export class SelectImagesComponent {
  @Output()
  nextLevel = new EventEmitter<number>();

  @Output()
  nbOfFails = new EventEmitter();

  images = signal<string[]>(["cat1.avif", "cat2.webp", "cat3.webp", "image1.jpeg", "image2.png", "image3.jpg"])

  form = new FormGroup([
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false)
  ]);

  onSubmit() {
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
}
