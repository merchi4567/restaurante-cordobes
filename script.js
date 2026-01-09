const form = document.getElementById("formReserva");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  mensaje.textContent = "✅ Reserva confirmada. ¡Te esperamos!";
  form.reset();
});
