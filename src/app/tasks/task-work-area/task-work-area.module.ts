import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TaskWordAreaComponent } from "./task-work-area.component";
import { TaskTodoComponent } from "./taskTodo/task-to-do.component";
import { LoadButtonComponent } from "./loadbutton/load-button.component";
import { MenuModule } from "src/app/shared/component/menu/menu.module";
import { AlertModule } from "src/app/shared/component/alert/alert.module";
import { SearchComponent } from "./search/search.component";
import { TaskDoneComponent } from "./taskDone/task-done.component";
import { TaskModule } from "../task/task.module";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";
import { TasksComponent } from "./tasks/tasks.component";
import { FilterByTitlePipe } from "./filter-by-title.pipe";
import { TaskChangeComponent } from "./taskChange/task-change.component";
import { TaskFormModule } from "../task-form/task-form.module";

@NgModule({
    declarations: [
        TaskWordAreaComponent,
        TaskTodoComponent,
        TaskDoneComponent,
        TasksComponent,
        TaskChangeComponent,
        LoadButtonComponent,
        SearchComponent,
        FilterByTitlePipe
    ],
    exports:[],
    imports: [
        CommonModule,        
        TaskModule,
        RouterModule,
        DarkenOnHoverModule,
        MenuModule,
        AlertModule,
        TaskFormModule
    ]
})
export class TaskWorkAreaModule{}