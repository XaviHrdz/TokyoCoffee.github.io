document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí podrías agregar lógica para verificar las credenciales con un servidor.
    // Para este ejemplo, vamos a suponer que el usuario y la contraseña correctos son "usuario" y "1234".

    if (username === 'usuario' && password === '1234') {
        window.location.href = 'index.html'; // Redirigir a la página principal
    } else {
        document.getElementById('errorMsg').textContent = 'Usuario o contraseña incorrectos.';
    }
});
