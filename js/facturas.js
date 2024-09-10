document.addEventListener('DOMContentLoaded', () => {
    const facturas = [
        { fecha: '2023-09-01', cliente: 'Juan Pérez', monto: 10000 },
        { fecha: '2023-09-02', cliente: 'Ana Gómez', monto: 15000 },
        { fecha: '2023-09-03', cliente: 'Carlos Ruiz', monto: 8000 },
        { fecha: '2023-09-04', cliente: 'María López', monto: 5000 }
    ];

    const tbody = document.querySelector('tbody');

    // Función para renderizar facturas
    const renderFacturas = (filtro = {}) => {
        tbody.innerHTML = ''; // Limpiar la tabla
        const facturasFiltradas = facturas.filter(factura => {
            let coincide = true;

            if (filtro.cliente) {
                coincide = factura.cliente.toLowerCase().includes(filtro.cliente.toLowerCase());
            }

            if (filtro.fechaInicio && new Date(factura.fecha) < new Date(filtro.fechaInicio)) {
                coincide = false;
            }

            if (filtro.fechaFin && new Date(factura.fecha) > new Date(filtro.fechaFin)) {
                coincide = false;
            }

            return coincide;
        });

        facturasFiltradas.forEach(factura => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${factura.fecha}</td>
                <td>${factura.cliente}</td>
                <td>$${factura.monto}</td>
                <td>
                    <button class="accion">Ver Detalle</button>
                    <button class="accion">Descargar PDF</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    };

    // Filtrar por cliente y fechas
    document.getElementById('filtrar').addEventListener('click', () => {
        const cliente = document.getElementById('buscarCliente').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;

        renderFacturas({ cliente, fechaInicio, fechaFin });
    });

    // Render inicial
    renderFacturas();
});
