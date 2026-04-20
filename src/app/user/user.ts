import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserInterface} from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required:true }) user!: UserInterface;
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
 }
