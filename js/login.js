// Validación del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulación de validación básica
    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, ingresa todos los campos.';
        return;
    }

    if (username === 'admin' && password === 'admin123') {
        // Si las credenciales son correctas, redirigir al panel principal
        window.location.href = '../html/index.html';
    } else {
        // Mostrar mensaje de error
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});
