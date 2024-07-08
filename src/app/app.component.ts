import { Component, inject, OnInit } from '@angular/core';
import { TasksServiceService } from './tasks-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo_app';
  task_service = inject(TasksServiceService)
  tasks:any[] = [];
  newTasks: string = "";
  ngOnInit() {
    this.showTasks();
  }
  showTasks(){
    this.tasks = this.task_service.getTasks();
    this.newTasks = "";
  }

  createTask(task_name:any){
    const task = {
      name: task_name.value,
      status: false
    }
    this.task_service.addTask(task)
    this.showTasks()
  }

  completeTask(index:number){
    const task = this.tasks[index];
    task.status = true
    this.task_service.completeTask(index, task)
    this.showTasks()
  }

  deleteTask(index:number){
    this.task_service.deleteTask(index)
    this.showTasks()
  }

  taskName:any
  login(form:any){
  this.taskName = form.value.taskName

  alert(`taskName-- ${this.taskName}`)
  }
}
