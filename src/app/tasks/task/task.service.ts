import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from '../../../environments/environment'
import { Task } from "./task";
import { TaskForm } from "../task-form/task-form";

const APIURL = environment.ApiUrl + "/tasks";

@Injectable({ providedIn: 'root'})
export class TaskService{
    
    constructor(private http: HttpClient){}

    getTaskFromUserPaginated(userName: string, page: number, completed: boolean = false){
        let sort: string = '';

        if (completed){
            sort = "dateCompleted";
        } else {
            sort = "deadline";
        }

        const params = new HttpParams()
            .append('_page', page.toString())
            .append('_limit','10')
            .append('user', userName)
            .append('completed', completed.toString())
            .append('_sort', sort)
            .append('_order', 'asc')
            
        
        return this.http
        .get<Task[]>(APIURL, { params: params})
    }

    getTask(taskId: number){
        return this.http.get<Task>(APIURL + "/" + taskId.toString());
    }

    createTask(newTask: TaskForm){
        return this.http.post(APIURL  , newTask);
    }

    removeTask(taskId: number){
        return this.http.delete(APIURL + '/' + taskId.toString());
    }

    patchTask(taskId: number){
        let dateCompleted = new Date();
        
        return this.http.patch(APIURL + "/" +  taskId.toString(), 
            {
                dateCompleted: dateCompleted,
                completed: true
            }
        );
    }

    putTask(taskId: number, task: TaskForm){
        return this.http.put(APIURL + '/' + taskId.toString(), task);
    }

}