import { Component,Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';




@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;

  isAddingTask= false;
  tasks=[{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular u1',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't1',
    userId: 'u3',
    title: 'Master Angular u3',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  }
]

get selectedUserTasks(){
  return this.tasks.filter((task)=>task.userId === this.userId)
}
onDoneTask(id:string){
  this.tasks = this.tasks.filter((task)=>task.id !==id)
}
onStartAddTask(){
  this.isAddingTask = true;
}

onCancelAddTask(){
  this.isAddingTask = false;
}
onAddTask(taskData:NewTaskData){
this.tasks.unshift({
  id:new Date().getTime().toString(),
  userId: this.userId,
  title: taskData.title,
  summary: taskData.summary,
  dueDate: taskData.date,
})
this.isAddingTask = false;
}
}
