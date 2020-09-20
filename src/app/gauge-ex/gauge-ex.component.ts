import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gauge-ex',
  templateUrl: './gauge-ex.component.html',
  styleUrls: ['./gauge-ex.component.css']
})
export class GaugeExComponent implements OnInit {
  val=Math.round(Math.random() * 100);
  constructor() { }

  ngOnInit() {
  }

}