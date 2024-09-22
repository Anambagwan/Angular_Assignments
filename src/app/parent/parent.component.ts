import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  stem = 'Computer';
  items: string[] = [];

  onItemReceived(item: string) {
    this.items.push(item);
  }
}