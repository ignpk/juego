document.addEventListener("DOMContentLoaded", () => {
  const cajas = document.querySelectorAll(".caja");
  const verduras = document.querySelectorAll(".verdura");
  const contadorElemento = document.querySelector(".contador");
  const mensajePerdiste = document.querySelector(".perdiste-mensaje");
  const mensajeGanaste = document.querySelector(".ganaste-mensaje");
  const contenedor = document.querySelector(".contenedorgeneral");
  let contador = 0;

  const actualizarContador = () => {
    contadorElemento.textContent = contador;
    contadorElemento.classList.add("animar-contador");
    setTimeout(() => {
      contadorElemento.classList.remove("animar-contador");
    }, 1000);
  };

  const mostrarMensaje = (mensajeElemento) => {
    mensajeElemento.style.display = "block";
  };

  const manejarClickCaja = (caja) => {
    caja.style.visibility = "hidden";
    const indiceAleatorio = Math.floor(Math.random() * verduras.length);
    const verduraSeleccionada = verduras[indiceAleatorio].cloneNode(true);

    Object.assign(verduraSeleccionada.style, {
      position: "absolute",
      top: `${caja.offsetTop}px`,
      left: `${caja.offsetLeft}px`,
      transition: "opacity 0.5s ease-in-out",
      opacity: "0"
    });

    setTimeout(() => {
      verduraSeleccionada.style.opacity = "1";
      setTimeout(() => {
        verduraSeleccionada.style.opacity = "0";
      }, 1000);
    }, 100);

    setTimeout(() => {
      contador++;
      actualizarContador();
      if (contador === 10) mostrarMensaje(mensajeGanaste);
      if (contador === 6) mostrarMensaje(document.querySelector(".intermedio-mensaje"));
    }, 1500);

    contenedor.appendChild(verduraSeleccionada);

    if (verduraSeleccionada.classList.contains("trampa")) {
      setTimeout(() => mostrarMensaje(mensajePerdiste), 2700);
    }
  };

  cajas.forEach((caja) => {
    caja.addEventListener("click", () => manejarClickCaja(caja));
  });

  document.getElementById('botonMostrar').addEventListener('click', () => {
    document.getElementById('divOculto').style.display = 'block';
  });

  document.getElementById('botonOcultar').addEventListener('click', () => {
    document.getElementById('divOculto').style.display = 'none';
  });
});
