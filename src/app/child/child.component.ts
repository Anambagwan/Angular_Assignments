import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  standalone: true,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  item: string = '';

  @Output() itemSent = new EventEmitter<string>();

  sendItem() {
    if (this.item.trim()) {
      this.itemSent.emit(this.item);
      // this.item = '';  // Clear the input after sending
    }
  }
}




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   imports: [],
//   templateUrl: './child.component.html',
//   styleUrl: './child.component.css'
// })
// export class ChildComponent {

// }
