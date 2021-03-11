import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Task } from "../../task/task";

@Component({
  selector: "mt-tasks",
  templateUrl: "./tasks.component.html"
})
export class TasksComponent implements OnChanges {

  @Input() tasks: Task[] = [];
  @Input() taskDone: boolean = false;
  rows: any[] = [];

  constructor() {}

  ngOnChanges(change: SimpleChanges): void {
    if (change.tasks) {
      this.rows = this.groupColumns(this.tasks);
    }
  }

  groupColumns(tasks: Task[]) {
    const newRows = [];

    for(let index = 0; index < tasks.length; index += 4) {
      newRows.push(tasks.slice(index, index + 4));
    }
    return newRows;
  }
}
