function toggleTarjeta(boton) {
    var contenido = boton.parentNode.nextElementSibling;
    contenido.style.display = contenido.style.display === 'none' ? 'block' : 'none';
  }
  
  document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Realizar aquí las acciones que deseas con los datos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Por ejemplo, imprimir los datos en la consola
    console.log("Nombre: " + name);
    console.log("Email: " + email);
    console.log("Mensaje: " + message);

    // Puedes realizar otras acciones, como enviar los datos a un servidor
    // utilizando AJAX o fetch

    // Restablecer el formulario después del envío
    document.getElementById("myForm").reset();
  });