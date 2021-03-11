import { Pipe, PipeTransform } from "@angular/core";

import { Task } from "../task/task";

import { DatePipe } from "@angular/common";

@Pipe({
  name: "filterBytitle"
})
export class FilterByTitlePipe implements PipeTransform {

  transform(tasks: Task[], descriptionQuery: string) {
    
    descriptionQuery = descriptionQuery
    .trim()
    .toLowerCase();

    if(descriptionQuery){
        return tasks.filter(tasks => 
          tasks.title.toLowerCase().includes(descriptionQuery) || 
          tasks.category.toLowerCase().includes(descriptionQuery) ||
          tasks.deadline.toString().includes(descriptionQuery) 
        )
    } else {
      return tasks
    }
  }
}
