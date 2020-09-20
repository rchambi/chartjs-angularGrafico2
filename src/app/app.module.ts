import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { NgxchartComponent } from './ngxchart/ngxchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GaugeExComponent } from './gauge-ex/gauge-ex.component';
import { GaugeModule } from 'angular-gauge';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexComponent } from './apex/apex.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartsModule, NgxChartsModule,BrowserAnimationsModule,GaugeModule.forRoot(), NgApexchartsModule 

 ],
  declarations: [ AppComponent, ChartjsComponent, NgxchartComponent, GaugeExComponent, ApexComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
