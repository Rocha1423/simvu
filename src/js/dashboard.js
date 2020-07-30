


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
        borderColor: '#00d1a4',
        borderWidth: 3
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
const ctx3 = document.getElementById('chart4').getContext('2d');
const chart4 = new Chart(ctx3, {
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
        borderWidth: 3
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
        borderWidth: 3
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
const ctx4 = document.getElementById('chart5').getContext('2d');
const chart5 = new Chart(ctx4, {
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
        borderWidth: 3
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
chart6 = document.getElementById('chart6')

$(document).ready(function(){

  var temp, hum, rot;

  setInterval(() => {

    for (let i = 1; i < 3; i++) {
      temp = Math.floor(Math.random() * 9 + 20);
      hum = Math.floor(Math.random() * 11 + 10);
      rot = Math.floor(Math.random() * 13);
      color= 'fff';
      if(Math.floor(Math.random() * 3) == 1) rot = rot * -1;
      if(rot > 9) color = 'ff8800';
        
      if (i % 2 == 0) {
        
      chart1.data.labels.push('');
      chart1.data.datasets[0].data.push(temp);
      chart1.update();
      $('#tempLabel').text(temp );

      chart2.data.labels.push('');
      chart2.data.datasets[0].data.push(hum);
      chart2.update();
      $('#humLabel').text(hum + '%' );

      chart3.style.transform = 'rotate('+ rot +'deg)';
      $('#rotLabel').text(rot);
    } else
    {
      chart4.data.labels.push('');
      chart4.data.datasets[0].data.push(temp);
      chart4.update();
      $('#tempLabel2').text(temp );

      chart5.data.labels.push('');
      chart5.data.datasets[0].data.push(hum);
      chart5.update();
      $('#humLabel2').text(hum + '%' );

      chart6.style.transform = 'rotate('+ rot +'deg)';
      $('#rotLabel2').text(rot);
    }


      $('#log').prepend('<div class="log" style="color:#'+ color +'">['+Date.now()+'] #992834 - Temperature has changed to '+ temp +'</div>')
    }

  }, 4000);


});

function modal(id)
{
  document.getElementById(id).style.display = 'block';
}

function closeModal(id)
{
  document.getElementById(id).style.display = 'none';
}