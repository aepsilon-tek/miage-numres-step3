import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div id="quiz">
      <h1>Burger Quiz</h1>
      <div id="question"></div>
      <div id="proposals"></div>
    </div>
    <div class="image-container">
      <img 
        alt="Question mark" 
        src="/question.svg" 
        width="250" 
        height="300"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
`;

initQuizz();