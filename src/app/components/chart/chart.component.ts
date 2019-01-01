import { Component, OnInit, Input } from '@angular/core';
import { DataFetchService } from 'src/app/services/data-fetch.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input('chartType') name: string;
  chart = [];

  constructor(private data: DataFetchService) {

  }

  ngOnInit() {
    this.data.getData()
      .subscribe(res => {
        // let temp_max = res['list'].map(res => res.main.temp_max)
        // let temp_min = res['list'].map(res => res.main.temp_min)
        // let alldates = res['list'].map(res => res.dt)

        // let weatherDates = []
        // alldates.forEach((res) => {
        //   let jsdate = new Date(res * 1000)
        //   weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        // })
        this.chart = new Chart('canvas', {
          type: this.name,
          data: {
            // labels: weatherDates,
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
              // {
              //   data: temp_max,
              //   borderColor: '#3cba9f',
              //   fill: false
              // },
              // {
              //   data: temp_min,
              //   borderColor: '#ffcc00',
              //   fill: false
              // },
              {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [2478, 5267, 734, 784, 433]
              }
            ]
          },
          options: {
            // legend: {
            //   display: false
            // },
            // scales: {
            //   xAxes: [{
            //     display: true
            //   }],
            //   yAxes: [{
            //     display: true
            //   }]
            // }
            legend: { display: false },
            title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
            }
          }
        })

      })
  }
}
