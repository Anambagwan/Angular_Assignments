import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c10',
  template: `
    <div>
      <input [(ngModel)]="name" placeholder="Enter name">
      <input [(ngModel)]="age" type="number" placeholder="Age">
      <button (click)="submitStudent()">Submit</button>
    </div>
  `
})
export class C10Component {
  @Output() studentAdded = new EventEmitter<{name: string, age: number}>();

  name: string = '';
  age!: number;

  submitStudent() {
    this.studentAdded.emit({name: this.name, age: this.age});
    this.name = '';  // Clear the fields after submission
    this.age = 0;
  }

}
