import {Component, Input} from '@angular/core';
import {Task} from "./task/task";
import {NewTask} from "./new-task/new-task";
import {type NewTaskData} from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required:true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the features of Angular',
      dueDate: '2026-05-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the features of Angular',
      dueDate: '2026-07-01',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the features of Angular',
      dueDate: '2026-07-01',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn all the features of Angular',
      dueDate: '2026-07-01',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
  this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask () {
    this.isAddingTask = false
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }
}
