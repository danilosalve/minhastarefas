import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskFormModule } from "./task-form/task-form.module";
import { TaskModule } from "./task/task.module";
import { TaskWorkAreaModule } from "./task-work-area/task-work-area.module";

@NgModule({    
    imports: [
        CommonModule,
        TaskModule,
        TaskFormModule,
        TaskWorkAreaModule
    ]
})
export class TasksModule{}