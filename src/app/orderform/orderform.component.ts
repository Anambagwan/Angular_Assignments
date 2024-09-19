import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

// import { Order } from '../TypeScriptClasses/order';
import { Order } from '../order';

@Component({
  selector: 'app-orderform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent {
  order: Order = new Order('', '', '', '');  // Initialize with a new Order object

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Order Submitted:', this.order);
    } else {
      console.log('Form is invalid');
    }
  }
}
