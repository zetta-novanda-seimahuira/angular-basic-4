import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy{
  @Input('tskElement') element: {type: string, name: string, content:string, cardId:number };
  @Input() name:string;


  constructor() { }

  ngOnInit(): void {
     console.log("First Loading");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Its OnChange");
  }

  ngOnDestroy(){
      console.log('ngOnDestroy call');
      
  }




}
