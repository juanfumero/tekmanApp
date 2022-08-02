import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  @Input() cardItem: any;
  @Output() myDetailClic: EventEmitter<any>;
  title = 'ng2-charts-demo';
  isComplete: boolean = false;

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
  constructor() {
    this.myDetailClic = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.pieChartDatasets[0].data[0] = this.calculationPie();
    this.pieChartDatasets[0].data[1] = this.calculationTotalValue();

    if (this.cardItem.value === this.cardItem.totalValue) {
      this.isComplete = true;
    } else {
      this.isComplete = false;
    }
  }

  calculationPie() {
    let result;
    result = this.cardItem.value * 1000 / this.cardItem.totalValue;
    return result
  }

  calculationTotalValue() {
    let result;
    result = this.cardItem.value * 1000 / this.cardItem.totalValue;

    return result - 1000;
  }


  detailTemario() {
    this.myDetailClic.emit();
  }

}
