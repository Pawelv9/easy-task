import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();

  onSelectUser() {
    this.select.emit(this.id);
  }
 }
