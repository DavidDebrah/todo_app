import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  constructor() {
    this.getTasks()
  }
  tasks:any[] = []
  key:string = "tasks"

  getTasks(){
    const my_tasks = localStorage.getItem(this.key)
    return my_tasks ? JSON.parse(my_tasks) : []
  }

  addTask(task_data:any){
    this.tasks.push(task_data)
    localStorage.setItem(this.key, JSON.stringify(this.tasks))
  }

  completeTask(index:number, task:any){
    this.tasks[index] = task;
    localStorage.setItem(this.key, JSON.stringify(this.tasks))
  }

  deleteTask(index:number){
    this.tasks.splice(index, 1)
    localStorage.setItem(this.key, JSON.stringify(this.tasks))
  }
}
