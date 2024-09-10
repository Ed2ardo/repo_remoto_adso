document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.busqueda-cliente input');
    const clienteItems = document.querySelectorAll('.cliente-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        clienteItems.forEach(item => {
            const placa = item.querySelector('.info-cliente p').textContent.toLowerCase();
            if (placa.includes(searchTerm)) {
                item.style.display = 'flex'; // Mostrar el item
            } else {
                item.style.display = 'none'; // Ocultar el item
            }
        });
    });
});
