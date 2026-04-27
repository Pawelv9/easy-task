import {Component, inject, Input} from '@angular/core';
import {TaskInterface} from "./task.model";
import {Card} from "../../shared/card/card";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    Card,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class Task {
  @Input({required: true}) task!: TaskInterface;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
