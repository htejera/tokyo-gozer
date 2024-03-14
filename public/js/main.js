function switchMode(el) {
  const bodyClass = document.body.classList;
  if (bodyClass.contains('dark')) {
    bodyClass.remove('dark');
    localStorage.setItem('theme', 'light'); // Guarda la preferencia en localStorage.
    el.innerHTML = 'light'; // Cambia el texto del enlace para reflejar el cambio.
  } else {
    bodyClass.add('dark');
    localStorage.setItem('theme', 'dark'); // Guarda la preferencia en localStorage.
    el.innerHTML = 'dark'; // Cambia el texto del enlace para reflejar el cambio.
  }
}

function loadThemePreference() {
  const theme = localStorage.getItem('theme');
  // Encuentra el enlace por su función onclick específica o agrega un ID/Clase para encontrarlo más fácilmente.
  const toggleButton = document.querySelector('a[onclick^="switchMode"]');
  
  if (theme === 'dark') {
    document.body.classList.add('dark');
    if (toggleButton) toggleButton.innerHTML = 'dark'; // Asegúrate de que el texto del enlace sea correcto para el tema oscuro.
  } else {
    document.body.classList.remove('dark');
    if (toggleButton) toggleButton.innerHTML = 'light'; // Asegúrate de que el texto del enlace sea correcto para el tema claro.
  }
}

document.addEventListener('DOMContentLoaded', loadThemePreference);