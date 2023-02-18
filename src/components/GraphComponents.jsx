import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Heatmap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Metric1',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              },
              {
                name: 'Metric2',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              },
              {
                name: 'Metric3',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              },
              {
                name: 'Metric4',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              },
              {
                name: 'Metric5',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              },
             
             
              ],
              options: {
                plotOptions: {
                    heatmap: {
                        radius: 5,
                    }
                },
                chart: {
                  type: 'heatmap',
                  toolbar: {
                    show: false
                  },
                  width: '100%',
                  height: 350
                },
                dataLabels: {
                  enabled: false
                },
                grid: {
                    show: false
                },
                colors: ["#6665DD"],
                yaxis: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                }
              },  
        };
    }
    

    render () {
        return(
            <div>
                <h5>Activity</h5>
                <Chart options={this.state.options} series={this.state.series} type="heatmap" />
            </div>
        
        )
    }
}

class BarGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            data: [{
              x: 'N5',
              y: 10
            }, {
              x: 'N4',
              y: 18
            }, {
              x: 'N3',
              y: 13
            }, {
              x: 'N2',
              y: 5
            }, {
              x: 'N1',
              y: 2
            }]
          }],
          options: {
            chart: {  
              type: 'bar',
              toolbar: {
                show: false
              },
            },
            colors: ["#6665DD"],
            dataLabels: {
              enabled: false
            },
          }
        }
    }

    render () {
      return(
          <div>
              <h5>Text Grades</h5>
              <Chart options={this.state.options} series={this.state.series} type="bar" />
          </div>
      
      )
  }
}

export { Heatmap, BarGraph };