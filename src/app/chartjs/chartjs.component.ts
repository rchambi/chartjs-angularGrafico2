import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartType,ChartOptions  } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {

  constructor() { }
@ViewChild("myChart") canvas: ElementRef;
donutGradient;
  public doughnutChartLabels: Label[] = ['Certainty','Other'];
  public doughnutChartData:SingleDataSet= [0, 100];
  secondValues=[40,60];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutOptions={
    
    circumference: Math.PI,
    rotation : Math.PI,
    cutoutPercentage : 90, // precent,
  }

  

  
otherValues(){

  this.doughnutChartData=this.secondValues;
}
 
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
 //   console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //  console.log(event, active);
  } 

  ngOnInit() {
    let ctx=this.canvas.nativeElement.getContext('2d');
        console.log(ctx)
        ctx.lineCap = "round";



    let gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0.000, 250.000, 500.000, 0.000);
    gradient.addColorStop(0.000, '#9E120E');
    gradient.addColorStop(0.300, '#FF5800');
    gradient.addColorStop(0.650, '#FFB414');
    gradient.addColorStop(1.00, '#4B912B');
    this.donutGradient = [{ backgroundColor: [gradient, '#e3e3e3'], borderColor:['transparent','transparent']}]
  
    

  }

}