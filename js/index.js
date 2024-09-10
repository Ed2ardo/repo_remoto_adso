// Actualizar la fecha y hora en tiempo real
function actualizarFechaHora() {
    const fechaHoraElemento = document.getElementById('fecha-hora');
    const fechaActual = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    fechaHoraElemento.textContent = fechaActual.toLocaleDateString('es-ES', opciones);
}
setInterval(actualizarFechaHora, 1000); // Actualiza cada segundo

// Simulación de ingreso de vehículo
document.querySelector('.form-placa form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const placaInput = document.getElementById('placa');
    const placa = placaInput.value.toUpperCase();
    if (placa) {
        alert(`Vehículo con placa ${placa} ha sido registrado exitosamente.`);
        placaInput.value = ''; // Limpiar el campo de entrada después del registro
    }
});

// Interacción con botones del panel de control de espacios
document.querySelectorAll('.btn-primario').forEach(function(button) {
    button.addEventListener('click', function() {
        const placa = this.parentElement.querySelector('h3').textContent.split(': ')[1];
        alert(`Facturando el vehículo con placa ${placa}.`);
    });
});

document.querySelectorAll('.btn-secundario').forEach(function(button) {
    button.addEventListener('click', function() {
        const accion = this.textContent;
        const placa = this.parentElement.querySelector('h3').textContent.split(': ')[1];
        alert(`${accion} el vehículo con placa ${placa}.`);
    });
});

// Actualización de espacios disponibles (simulación básica)
function actualizarEspaciosDisponibles() {
    const espacios = document.querySelectorAll('.espacios-disponibles ul li');
    const ocupados = document.querySelectorAll('.vehiculo');
    
    espacios.forEach(function(espacio, index) {
        if (index < ocupados.length) {
            espacio.classList.add('ocupado');
            espacio.textContent = `Ocupado por ${ocupados[index].querySelector('h3').textContent.split(': ')[1]}`;
        } else {
            espacio.classList.remove('ocupado');
            espacio.textContent = `Espacio A${index + 1}`;
        }
    });
}

// Llamar a la función para actualizar los espacios disponibles al cargar la página
actualizarEspaciosDisponibles();
