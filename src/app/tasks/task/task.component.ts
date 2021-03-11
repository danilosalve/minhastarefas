import { Component, Input, OnInit } from "@angular/core";

import { TaskService } from './task.service';
import { AlertService } from 'src/app/shared/component/alert/alert.service';
import { DialogConfirmService } from "src/app/shared/component/dialogconfirm/dialogconfirm";

@Component({
    selector: 'mt-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  
  @Input() id: number = 0;
  @Input() title: string;
  @Input() category: string;
  @Input() deadline: Date;
  @Input() description: string;
  @Input() completed: boolean;
  @Input() dateCompleted: Date;
  @Input() taskDone: boolean = false;

  @Input() delayedTask: boolean = false;

  constructor(    
    private taskService: TaskService,
    private alertService: AlertService,
    private dialogconfirmService: DialogConfirmService    
  ){}

  ngOnInit(): void {
    const hoje = new Date();
    const dataTask = new Date(this.deadline);

    if (!this.taskDone){
      if ( dataTask <= hoje){
        this.delayedTask = true;
      }
    }       
  }

  completedTask(){

    this.taskService
    .patchTask(this.id)
    .subscribe(()=>{
      this.alertService.success("Tarefa concluída com sucesso!", true);
      window.location.reload();
    },
    err => {
      console.error(err);
      this.alertService.danger("Falha ao concluir Tarefa.", true);
    })
  }  

  removeTask(){

    this.dialogconfirmService.confirm("Deseja realmente excluir a tarefa?")
    .then(( confirmou ) =>{
      if(confirmou){
        this.taskService
        .removeTask(this.id)
        .subscribe(()=>{
          this.alertService.success("Tarefa excluída com sucesso!", true);
          window.location.reload();
        },
        err => {
          console.error(err);
          this.alertService.danger("Falha ao excluir Tarefa.", true);
        })
      }
    })
  }
}
