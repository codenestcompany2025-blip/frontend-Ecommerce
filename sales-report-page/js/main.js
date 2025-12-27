
  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
      datasets: [{
        data: [20000, 15000, 40000, 80000, 60000, 120000, 140000, 110000, 80000, 90000, 120000],
        borderColor: "#0d9488",
        backgroundColor: "rgba(13, 148, 136, 0.05)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 3,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // مهم جدًا
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#6b7280" } },
        y: {
          grid: { color: "#f3f4f6" },
          ticks: {
            color: "#6b7280",
            callback: (value) => (value / 1000) + "k",
          },
          beginAtZero: true,
        },
      },
    },
  });
