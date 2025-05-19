const ctx = document.getElementById('priceChart').getContext('2d');

    const priceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [{
          label: 'Цена, ₽',
          data: [15000, 14800, 14500, 13900, 14100, 13500],
          borderColor: '#4bc0c0',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#4bc0c0',
          pointBorderColor: '#fff',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        plugins: {
           legend: {
        display: false,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function(value) {
                return value + ' ₽';
              }
            }
          }
        }
      }
    });