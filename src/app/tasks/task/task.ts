import {Component, inject, Input} from '@angular/core';
import {TaskInterface} from "./task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
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
