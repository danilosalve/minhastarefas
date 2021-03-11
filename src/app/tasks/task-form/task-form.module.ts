import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TaskFormComponent } from "./task-form.component";
import { VMessageModule } from "src/app/shared/component/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        TaskFormComponent
    ],
    exports:[
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        VMessageModule        
    ]    
})
export class TaskFormModule{}