import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() taskCreated= new EventEmitter<{taskName: string, taskContent: string}>();
  @Output('bpCreated') goalCreated= new EventEmitter<{taskName: string, taskContent: string}>();
  // newtaskName = '';
  // newtaskContent = '';
  newId= '';
  
  @ViewChild('taskContentInput', {static: true}) taskContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  
  onAddtask(taskInput: HTMLInputElement){
    console.log(this.taskContentInput.nativeElement.value)
    this.taskCreated.emit({
      
      // taskName: this.newtaskName,
      taskName: taskInput.value,
      taskContent: this.taskContentInput.nativeElement.value
    })
  }

  onAddgoal(taskInput: HTMLInputElement){
    this.goalCreated.emit({
      taskName: taskInput.value,
      taskContent: this.taskContentInput.nativeElement.value
      
    })
  }


  


}
