import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions } from 'chart.js';
import { CardService } from '../services/card.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'ng2-charts-demo';
  listCard = [];
  isLoading = false;

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

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getListCardInfo().subscribe(item => {
      this.listCard = item;
    });
  }

  detailTemario(event:any) {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['detailCard',event.id]);
      this.isLoading = false;
    }, 1500);
  }

}
