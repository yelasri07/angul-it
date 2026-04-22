import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-select-images',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './select-images.component.html',
  styleUrl: './select-images.component.css',
})
export class SelectImagesComponent {
  @Output()
  nextLevel = new EventEmitter<number>();

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
        this.form.setErrors({ "error": "invalid captcha" })
        return;
      }
    })

    if (this.form.invalid) {
      return
    }

    this.nextLevel.emit(2)
  }

  isChecked(index: number) {
    return this.form.controls[index].value
  }
}
