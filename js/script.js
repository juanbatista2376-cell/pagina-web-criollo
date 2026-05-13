console.log("La Casita Criolla 809 - Página cargada correctamente");
function moverCatalogo(direccion) {
    const slider = document.getElementById("catalogSlider");
    const distancia = 390;
  
    slider.scrollBy({
      left: direccion * distancia,
      behavior: "smooth"
    });
  }
  let zoomActual = 1;

function abrirImagen(src) {
  const modal = document.getElementById("imageModal");
  const imagen = document.getElementById("modalImage");

  zoomActual = 1;
  imagen.src = src;
  imagen.style.transform = `scale(${zoomActual})`;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function cerrarImagen() {
  const modal = document.getElementById("imageModal");

  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function cambiarZoom(valor) {
  const imagen = document.getElementById("modalImage");

  zoomActual += valor;

  if (zoomActual < 0.6) {
    zoomActual = 0.6;
  }

  if (zoomActual > 3) {
    zoomActual = 3;
  }

  imagen.style.transform = `scale(${zoomActual})`;
}

function reiniciarZoom() {
  const imagen = document.getElementById("modalImage");

  zoomActual = 1;
  imagen.style.transform = `scale(${zoomActual})`;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    cerrarImagen();
  }
});