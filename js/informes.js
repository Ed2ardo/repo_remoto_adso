// Cargar la librería de Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(dibujarGraficoOcupacion);

// Función para dibujar el gráfico de ocupación
function dibujarGraficoOcupacion() {
    var data = google.visualization.arrayToDataTable([
        ['Estado', 'Cantidad'],
        ['Ocupados', 70],
        ['Disponibles', 30]
    ]);

    var options = {
        title: 'Porcentaje de Ocupación del Parqueadero',
        pieHole: 0.4,
        colors: ['#007bff', '#e6f7ff']
    };

    var chart = new google.visualization.PieChart(document.getElementById('graficoOcupacion'));
    chart.draw(data, options);
}
