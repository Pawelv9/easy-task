import {Component, EventEmitter, Input, Output} from '@angular/core';

type UserType = {
  id: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required:true}) user!: UserType;

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
 }
