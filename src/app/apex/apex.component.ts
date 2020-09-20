import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.css']
})
export class ApexComponent implements OnInit {
  series=[20];
  
  options={
      height:350,
      type: 'radialBar',
      radialBar:{

      }
  }
    @ViewChild('chart') chart: ChartComponent;

  constructor() { }

  ngOnInit() {
  }

}