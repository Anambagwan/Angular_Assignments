import { Component } from '@angular/core';

@Component({
  selector: 'app-p10',
  template: `
    <app-c10 (studentAdded)="onStudentAdded($event)"></app-c10>
    <ul>
      <li *ngFor="let student of students">
        Name: {{ student.name }}, Age: {{ student.age }}
      </li>
    </ul>
  `
})
export class P10Component {
  students: {name: string, age: number}[] = [];

  onStudentAdded(student: {name: string, age: number}) {
    this.students.push(student);
  }

}
