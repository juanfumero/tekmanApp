import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  public pieChartDatasets = [
    {
      data: [900, 100],
      backgroundColor: ["#ed993f", "#f2f2f2"],
      hoverBackgroundColor: ["#ed993f", "#f2f2f2"],
      options: {
        plugins: {
          tooltip: {
            enabled: true
          },
        }
      }
    },
  ];
  public pieChartLegend = false;
  public pieChartPlugins = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detailTemario(event:any) {
    this.router.navigate(['/detailCard']);
  }

}
