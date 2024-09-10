document.addEventListener('DOMContentLoaded', () => {
    const gridParking = document.querySelector('.grid-parking');
    const totalSpots = 100; // Cantidad de espacios en el parking

    // Generar los espacios de parking
    for (let i = 1; i <= totalSpots; i++) {
        const spot = document.createElement('div');
        spot.classList.add('parking-spot');

        // Simulación de estado aleatorio (ocupado o disponible)
        const isOccupied = Math.random() > 0.5;
        spot.classList.add(isOccupied ? 'occupied' : 'available');

        // Agregar número de espacio
        const spotNumber = document.createElement('span');
        spotNumber.textContent = i;
        spot.appendChild(spotNumber);

        // Evento de click para marcar ocupación
        spot.addEventListener('click', () => {
            spot.classList.toggle('occupied');
            spot.classList.toggle('available');
        });

        gridParking.appendChild(spot);
    }
});
