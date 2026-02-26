import './assets/style.css';
import { createCard } from './components/card.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <header>
    <h1>Organización de Archivos</h1>
    <p>Proyecto estructurado bajo estándares de Frameworks Modernos</p>
  </header>
  <main id="content">
    </main>
`;

const content = document.querySelector('#content');
content.appendChild(createCard("Estructura de Carpetas", "Cumple con la jerarquía definida."));
content.appendChild(createCard("Mantenimiento", "Separación de lógica y estilos lógica."));
