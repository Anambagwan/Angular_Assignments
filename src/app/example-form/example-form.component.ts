import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-form',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule] ,
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      birthday: ['', [Validators.required]],
      country: ['India', [Validators.required]],
      gender: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  passwordValidator(control: any) {
    const value = control.value;
    if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value) || !/[!@#$%^&*]/.test(value)) {
      return { passwordStrength: true };
    }
    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
