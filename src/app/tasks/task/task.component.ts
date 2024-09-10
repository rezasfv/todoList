import { Component , inject, Input} from '@angular/core';
import {type Task} from './task.model'
import { DatePipe } from '@angular/common'; 
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!:Task;
private tasksService = inject(TasksService);
  onDoneTask(){
    this.tasksService.removeTask(this.task.id)
  }

}
