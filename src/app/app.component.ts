import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "ssf";
  id = 0;

  taskElements = [{type: 'task', name:'It Is Title!', content: 'Description ', cardId: 0 }];


  ontaskAdded(taskData: {taskName: string, taskContent: string}){
    this.taskElements.push({
      type : 'task',
      name : taskData.taskName,
      content: taskData.taskContent,
      cardId: this.id + 1
    });
  }
  ongoalAdded(goalData: {taskName: string, taskContent: string}){
    this.taskElements.push({
      type : 'goal',
      name : goalData.taskName,
      content: goalData.taskContent,
      cardId: this.id + 1
    });
}

  onChangeFirst(){
    this.taskElements[0].name = 'Changes!';
  }

  onDestroyFirst() {
    this.taskElements.splice(0,1);
  }
}
