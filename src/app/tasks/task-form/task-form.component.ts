import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { dataValidaValidator } from "src/app/shared/validators/dataValida.validator";
import { AlertService } from "src/app/shared/component/alert/alert.service";
import { TaskService } from "../task/task.service";
import { TaskForm } from "./task-form";
import { finalize } from "rxjs/operators";
import { UserService } from "src/app/core/user/user.service";

@Component({
  selector: "mt-taskForm",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"]
})
export class TaskFormComponent implements OnInit {
  
  formTask: FormGroup; 
  currentUser: string;

  @Input() id: number = 0;
  @Input() title: string = "";
  @Input() category: string = "";
  @Input() description: string = "";
  @Input() completed: boolean = false;
  @Input() deadline: string = '';
  @Input() dateCompleted: string = "";
  @Input() nOperation: number = 3;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private taskService: TaskService,
    private alertService: AlertService
    ) {}

  ngOnInit() {    
    this.currentUser = this.userService.getUserName();
    this.criaFormTask();
  }

  criaFormTask() {
    this.formTask = this.fb.group({
      title: [
        this.title,
        Validators.compose([Validators.required, Validators.maxLength(30)])
      ],
      category: [
        this.category,
        Validators.compose([Validators.required])
      ],
      deadline: [
        this.deadline,
        Validators.compose([Validators.required, dataValidaValidator])
      ],
      user:[this.currentUser],
      description: [
        this.description,
        Validators.compose([Validators.maxLength(255)])],
      completed: [this.completed],
      dateCompleted: [this.dateCompleted]
    });
  }

  submitTask() {    
    const task = this.formTask.getRawValue() as TaskForm;

    if (this.nOperation == 3){
      
      this.taskService
      .createTask(task)
      .pipe(finalize(()=>{
        this.router.navigate(['todotask']);
      }))
      .subscribe(() => {
        this.alertService.success("Tarefa incluida com sucesso!", true);
      }, 
      err => {
        console.error(err);
        this.alertService.danger("Falha ao incluir Tarefa.", true);
      })

    } else if (this.nOperation == 4 ){
      
      this.taskService
      .putTask(this.id,task)
      .pipe(finalize(()=>{
        this.router.navigate(['todotask']);
      }))
      .subscribe(() => {
        this.alertService.success("Tarefa alterada com sucesso!", true);
      },
      err =>{
        console.error(err);
        this.alertService.danger("Falha ao alterar tarefa.", true);
      })

    } else {
      console.log("Operação invalida!");
    }
  }
}
