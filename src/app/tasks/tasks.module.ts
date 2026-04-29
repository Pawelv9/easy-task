import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {Tasks} from "./tasks";
import {Task} from "./task/task";
import {NewTask} from "./new-task/new-task";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [Tasks, Task, NewTask],
  exports: [Tasks],
  imports: [CommonModule, FormsModule ,SharedModule]
})
export class TasksModule {}
