import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-okra-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
        <small *ngIf="form.get('email')?.errors?.['required']">Email is required.</small>
        <small *ngIf="form.get('email')?.errors?.['email']">Enter a valid email.</small>
      </div>

      <label style="display:block; margin-top: 0.5rem;">
        Name
        <input type="text" formControlName="name" />
      </label>
      <div *ngIf="form.get('name')?.invalid && form.get('name')?.touched">
        <small>Name is required.</small>
      </div>

      <button type="submit" [disabled]="form.invalid" style="margin-top: 0.75rem;">Submit</button>
    </form>
  `,
  styles: ``
})
export class OkraFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
    }
  }
}
