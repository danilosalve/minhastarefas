import { Component, OnInit } from "@angular/core";

import { TaskService } from "../../task/task.service";
import { Task } from "../../task/task";
import { AlertService } from "src/app/shared/component/alert/alert.service";
import { UserService } from "src/app/core/user/user.service";

@Component({
    templateUrl: './task-done.component.html'
})
export class TaskDoneComponent implements OnInit{

    tasks: Task[] = [];
    filter: string = '';
    hasMore: boolean = true;
    currentPage: number = 0;
    userName: string = '';

    constructor(private taskService: TaskService,
        private userService: UserService,
        private alertService: AlertService){}

    ngOnInit(): void {
        this.userName = this.userService.getUserName();
        this.loadTaskDone();
    }

    loadTaskDone(){
        this.taskService
        .getTaskFromUserPaginated(this.userName, ++this.currentPage, true)
        .subscribe(tasks => {
            this.filter = '';
            this.tasks = this.tasks.concat(tasks);            
            if(!tasks.length) this.hasMore = false;
        },
        err => {
            console.error(err);
            this.alertService.danger('Falha ao carregar tarefas',true);
        })

    }
}