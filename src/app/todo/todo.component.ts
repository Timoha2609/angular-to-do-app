import {Component, OnInit} from '@angular/core';
import {TaskStorageService} from "../task-storage.service";
import {Task} from "../shared/models/task.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: Task[];

  constructor(private storage: TaskStorageService) {
  }

  /**
   * Load tasks on init
   */
  ngOnInit() : void{
    this.storage.init();
    this.tasks = this.storage.getTasks();
  }

  colorstatus(status:string):string{
    if(status==='not started') {return 'red';}
    else if (status==='pending') {return 'blue'}
    else if (status==='finished') {return 'green'}
    else{return ''}
  }

  stars(difficulty:number):string{
      if(difficulty===1) {return '★';}
      else if (difficulty === 2) {return '★★'}
      else if (difficulty === 3) {return '★★★'}
      else if (difficulty === 4) {return '★★★★'}
      else if (difficulty === 5) {return '★★★★★'}
      else{console.log(typeof(difficulty))}
    }
  
  

  /**
   * Remove the tasks from the list
   *
   * @param id task index to remove
   */
  delete(id): void {
    this.storage.delete(id);
    this.tasks = this.storage.getTasks();
  }
}
