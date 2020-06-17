


const ctx1 = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  },
  options: {
    responsive: false,
    legend: {
      display: false
    },
    elements: {
      line: {
        borderColor: '#00a782',
        borderWidth: 1
      },
      point: {
        radius: 0
      }
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    }
  }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  },
  options: {
    responsive: false,
    legend: {
      display: false
    },
    elements: {
      line: {
        borderColor: '#00d1a4',
        borderWidth: 1
      },
      point: {
        radius: 0
      }
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    }
  }
});

chart3 = document.getElementById('chart3')

$(document).ready(function(){

  var temp, hum, rot;

  setInterval(() => {

   temp = Math.floor(Math.random() * 9 + 20);
   hum = Math.floor(Math.random() * 11 + 10);
   rot = Math.floor(Math.random() * 13);
   if(Math.floor(Math.random() * 3) == 1) rot = rot * -1;
    
  chart1.data.labels.push('');
  chart1.data.datasets[0].data.push(temp);
  chart1.update();
  $('#tempLabel').text(temp );

  chart2.data.labels.push('');
  chart2.data.datasets[0].data.push(hum);
  chart2.update();
  $('#humLabel').text(hum + '%' );

  chart3.style.transform = 'rotate('+ rot +'deg)';
  $('#rotLabel').text(rot );

  }, 1000);


});

