document.addEventListener("DOMContentLoaded", function() {
  var cajas = document.querySelectorAll(".caja");
  var verduras = document.querySelectorAll(".verdura");
  var contador = 0; // Variable para llevar la cuenta

  // Función para actualizar el contador
  function actualizarContador() {
    var contadorElemento = document.querySelector(".contador");
    contadorElemento.textContent = contador; // Actualiza el contenido del contador con el valor actual
    contadorElemento.classList.add("animar-contador"); // Agrega la clase de animación al contador
    setTimeout(function() {
      contadorElemento.classList.remove("animar-contador"); // Remueve la clase de animación después de un momento
    }, 1000); // Tiempo suficiente para que termine la animación
  }

  // Función para mostrar el mensaje "Perdiste" con un retraso de 2 segundos
  function mostrarMensajePerdiste() {
    setTimeout(function() {
      var mensajePerdiste = document.querySelector(".perdiste-mensaje");
      mensajePerdiste.style.display = "block"; // Mostrar el mensaje "Perdiste" después de 2 segundos
    }, 2700);
  }

  // Función para mostrar el mensaje "Ganaste"
  function mostrarMensajeGanaste() {
    var mensajeGanaste = document.querySelector(".ganaste-mensaje");
    mensajeGanaste.style.display = "block";
  }

  // Función para mostrar el mensaje "Intermedio" y ocultarlo después de 2 segundos
  function mostrarMensajeIntermedio() {
    var mensajeIntermedio = document.querySelector(".intermedio-mensaje");
    mensajeIntermedio.style.display = "block"; // Mostrar el mensaje "Intermedio"

    // Temporizador para ocultar el mensaje después de 2 segundos
    setTimeout(function() {
      mensajeIntermedio.style.display = "none"; // Ocultar el mensaje después de 2 segundos
    }, 2500);
  }

  cajas.forEach(function(caja) {
    caja.addEventListener("click", function(event) {
      // Ocultamos la caja actual
      caja.style.visibility = "hidden";

      // Elegimos una verdura al azar
      var indiceAleatorio = Math.floor(Math.random() * verduras.length);
      var verduraSeleccionada = verduras[indiceAleatorio].cloneNode(true);

      // Establecemos las coordenadas de la verdura igual que las de la caja clicada
      verduraSeleccionada.style.position = "absolute";
      verduraSeleccionada.style.top = caja.offsetTop + "px";
      verduraSeleccionada.style.left = caja.offsetLeft + "px";

      // Agregamos una transición suave
      verduraSeleccionada.style.transition = "opacity 0.5s ease-in-out"; // Transición de 0.5 segundos

      // Configuramos la opacidad a 0 antes de agregar la verdura
      verduraSeleccionada.style.opacity = "0";

      // Esperamos un breve momento antes de mostrar la verdura
      setTimeout(function() {
        // Configuramos la opacidad a 1 para que aparezca suavemente
        verduraSeleccionada.style.opacity = "1";

        // Esperamos 1 segundo antes de ocultar la verdura
        setTimeout(function() {
          // Movemos la verdura hacia la esquina superior y la ocultamos
          verduraSeleccionada.style.opacity = "0";
        }, 1000); // Espera 1 segundo antes de ocultar la verdura
      }, 100); // Espera 50 milisegundos antes de mostrar la verdura

      // Incrementamos el contador después de 2 segundos
      setTimeout(function() {
        contador++;
        actualizarContador(); // Actualizamos el contador en la interfaz
        
        // Verificar si el contador llegó a 10 y mostrar el mensaje "Ganaste"
        if (contador === 10) {
          mostrarMensajeGanaste();
        }
        // Verificar si el contador llegó a 5 y mostrar el mensaje "Intermedio"
        if (contador === 6) {
          mostrarMensajeIntermedio();
        }
      }, 1500); // Espera 2 segundos antes de incrementar el contador

      // Añadimos la verdura al mismo contenedor que las cajas
      var contenedor = document.querySelector(".contenedorgeneral");
      contenedor.appendChild(verduraSeleccionada);

      // Verificar si la verdura es una trampa
      if (verduraSeleccionada.classList.contains("trampa")) {
        mostrarMensajePerdiste(); // Mostrar el mensaje "Perdiste" después de 2 segundos
      }
    });
  });
});



      // opciones del menu principal
document.getElementById('botonMostrar').addEventListener('click', function() {
  var divOculto = document.getElementById('divOculto');
  divOculto.style.display = 'block';
});

document.getElementById('botonOcultar').addEventListener('click', function() {
  var divOculto = document.getElementById('divOculto');
  divOculto.style.display = 'none';
});