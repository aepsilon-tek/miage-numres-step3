import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/">click ici</a>
        </div>


        <div class="topnav">
  <a href="https://facebook.com" target="_blank" aria-label="Facebook">
    <svg class="icon" viewBox="0 0 24 24"><path d="M22 12A10 10 0 1 0 12 22V14h-2v-2h2v-1.5c0-2.07 1.12-3 3.44-3H17v2h-1c-.96 0-1 .37-1 1V12h2.6l-.6 2H15v6.1A10 10 0 0 0 22 12Z"/></svg>
  </a>
  <a href="https://twitter.com" target="_blank" aria-label="Twitter">
    <svg class="icon" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.7A4.15 4.15 0 0 0 21.78 4a8.27 8.27 0 0 1-2.6 1 4.14 4.14 0 0 0-7.05 3.8 11.72 11.72 0 0 1-8.52-4.3 4.14 4.14 0 0 0 1.28 5.5 4.09 4.09 0 0 1-1.88-.52v.05c0 2 1.42 3.67 3.3 4a4.18 4.18 0 0 1-1.87.07 4.14 4.14 0 0 0 3.86 2.87A8.3 8.3 0 0 1 2 18.58a11.74 11.74 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.35-.02-.53A8.3 8.3 0 0 0 22.46 6z"/></svg>
  </a>
  <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
    <svg class="icon" viewBox="0 0 24 24"><path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-12 20h-3v-10h3v10zm-1.5-11.4c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.4h-3v-5.6c0-1.3-.5-2.2-1.6-2.2-1.1 0-1.7.9-1.7 2.2v5.6h-3v-10h3v1.5h.1c.4-.7 1.3-1.5 2.8-1.5 2 0 3.4 1.3 3.4 4v6z"/></svg>
  </a>
</div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz">
                <h1>A TOI DE JOUER</h1>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card question-card">
              <div class="question-mark"></div>
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz();