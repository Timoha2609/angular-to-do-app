import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  id:number;

  title = new FormControl('');

  note = new FormControl('');

  status = new FormControl('');

  difficulty = new FormControl('');


  constructor(private storage: TaskStorageService, private router: Router) {
  }

  /**
   * Create a task a redirect to the todo list
   */
  createTask() {
    this.storage.add({
      id:null,
      difficulty:Number(this.difficulty.value),
      note:this.note.value,
      status:this.status.value,
      title:this.title.value,
    });
    this.router.navigate(['/tasks'])
  }
}
