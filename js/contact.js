// Selección de elementos
const contactForm = document.getElementById('contactForm');
const inpNombre      = document.getElementById('nombre');
const inpEmail       = document.getElementById('email');
const inpMensaje     = document.getElementById('mensaje');
const resultDiv      = document.getElementById('form-result');

// Al enviar el formulario
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();
  resultDiv.textContent = '';

  // Ejecutar validaciones
  const vNombre  = validarNombre();
  const vEmail   = validarEmail();
  const vMensaje = validarMensaje();

  if (vNombre && vEmail && vMensaje) {
    resultDiv.textContent = '¡Gracias por tu mensaje! En breve nos pondremos en contacto.';
    resultDiv.classList.add('visible');
    contactForm.reset();

  }
});

/**
 * Limpia errores actuales del formulario
 */
function clearErrors() {
  document.querySelectorAll('.error-message')
    .forEach(div => div.textContent = '');
  [inpNombre, inpEmail, inpMensaje]
    .forEach(el => el.classList.remove('input-error'));
}

/**
 * Valida que el nombre tenga al menos 3 caracteres
 */
function validarNombre() {
  const val = inpNombre.value.trim();
  const div = document.getElementById('error-nombre');

  if (val.length < 3) {
    div.textContent = 'El nombre debe tener al menos 3 caracteres.';
    inpNombre.classList.add('input-error');
    return false;
  }
  return true;
}

/**
 * Valida formato de email con expresión regular
 */
function validarEmail() {
  const val = inpEmail.value.trim();
  const div = document.getElementById('error-email');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(val)) {
    div.textContent = 'Por favor ingresa un correo válido.';
    inpEmail.classList.add('input-error');
    return false;
  }
  return true;
}

/**
 * Valida que el mensaje tenga al menos 10 caracteres
 */
function validarMensaje() {
  const val = inpMensaje.value.trim();
  const div = document.getElementById('error-mensaje');

  if (val.length < 10) {
    div.textContent = 'El mensaje debe tener al menos 10 caracteres.';
    inpMensaje.classList.add('input-error');
    return false;
  }
  return true;
}