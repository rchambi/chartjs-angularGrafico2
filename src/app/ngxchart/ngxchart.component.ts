import { Component, OnInit, NgModule, ViewChild, ElementRef  } from '@angular/core';



@Component({
  selector: 'ngxchart',
  templateUrl: './ngxchart.component.html',
  styleUrls: ['./ngxchart.component.css']
})
export class NgxchartComponent implements OnInit {
  @ViewChild("myGauge") el: ElementRef;
  donutGradient;

  view: any[] = [500, 400];
  data = [
  {
    "name": "Data 1",
    "value": 80
  }
];
;
  single: any[];

  colorScheme = {
    domain: ['#5AA454']
  };
  
  onSelect(event) {
    console.log(event);
  }
    
otherValues(event){
  
  let val=Math.round(Math.random() * 100);
  
   Object.assign(this.data, 29)   
   const returnedTarget =  Object.assign( this,29,{val})   
   
   console.log(returnedTarget)
}
  constructor() { 
  }  


  ngOnInit() {
  }

}