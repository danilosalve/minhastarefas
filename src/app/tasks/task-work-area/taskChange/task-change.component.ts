import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Task } from "../../task/task";
import { TaskService } from "../../task/task.service";
import { AlertService } from "src/app/shared/component/alert/alert.service";
import { Observable } from "rxjs";

@Component({
    templateUrl: './task-change.component.html'
})
export class TaskChangeComponent implements OnInit{
    
    taskId: number = 0;
    task$: Observable<Task>;
    task: Task

    constructor(private activatedRoute: ActivatedRoute,
        private taskService: TaskService,
        private alertService: AlertService,
        private router: Router){}
    
    ngOnInit(): void {
        this.taskId = this.activatedRoute.snapshot.params.taskId;
        this.task$ = this.taskService.getTask(this.taskId);
        this.task$.subscribe((task) => {
            this.task = task;            
        }, err => {
            this.alertService.danger("Falha ao carregar Tarefa", true);
            this.router.navigate(['not-found'])
        })

    }

    
}