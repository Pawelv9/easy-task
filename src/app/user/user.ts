import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserInterface} from "./user.model";
import {Card} from "../shared/card/card";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required:true }) user!: UserInterface;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
 }
