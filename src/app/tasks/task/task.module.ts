import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TaskComponent } from "./task.component";
import { DialogConfirmService } from "src/app/shared/component/dialogconfirm/dialogconfirm";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        TaskComponent
    ],
    exports: [
        TaskComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule        
        
    ],
    providers : [
        DialogConfirmService
    ]    
})
export class TaskModule{}