import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";




@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;

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
}
