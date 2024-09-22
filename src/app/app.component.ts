import { Component, EventEmitter } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { TempconvPipe } from './mypipes/tempconv.pipe'; 
import { ReverseStringPipe } from './mypipes/reverseString.pipe';
import { OrderformComponent } from './orderform/orderform.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { C10Component } from './c10/c10.component';
import { P10Component } from './p10/p10.component';
import { PythonComponent } from './python/python.component';
import { CComponent } from './c/c.component';
import { JavaComponent } from './java/java.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, P10Component, C10Component,ExampleFormComponent,CComponent,JavaComponent,PythonComponent,ParentComponent, FormsModule, TempconvPipe, ReverseStringPipe,ChildComponent, OrderformComponent],  // Add FormsModule and Pipes here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Array of user objects
  users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      department: 'Finance',
      salary: 5000,
      joiningDate: '11/12/2015'
    },
    {
      firstName: 'Amy',
      lastName: 'Watson',
      department: 'HR',
      salary: 8000,
      joiningDate: '23/07/2013'
    },
    {
      firstName: 'Shrishti',
      lastName: 'Sharma',
      department: 'IT',
      salary: 10000,
      joiningDate: '20/10/2019'
    }
  ];

  fahrenheit: number = 0;
  celsius: number = 0;

  exampleString: string = 'string';


  submittedData:any=null;
  submitted = false;

  formData = {
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    termsAccepted: false
  };

 
  // Form submission handler
  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.formData = form.value;  // Store form data after submission
      console.log('Form Submitted:', this.formData);
    } else {
      console.log('Form is invalid');
    }
  }

  // Reset handler
  onReset(form: any) {
    form.resetForm();  // Resets form data
    this.submitted = false;  // Resets the submitted state
  }

  constructor(private router: Router) {}

  onSelectLanguage(lang: string) {
    this.router.navigate([lang]);
  }
  title='Component Communication Example';
}
