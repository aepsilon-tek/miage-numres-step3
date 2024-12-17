import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost"></a>
          <a href="#" class="fa fa-skype"></a>
          <a href="#" class="fa fa-android"></a>
          <a href="#" class="fa fa-dribbble"></a>
          <a href="#" class="fa fa-vimeo"></a>
          <a href="#" class="fa fa-tumblr"></a>
          <a href="#" class="fa fa-vine"></a>
          <a href="#" class="fa fa-foursquare"></a>
          <a href="#" class="fa fa-stumbleupon"></a>
          <a href="#" class="fa fa-flickr"></a>
          <a href="#" class="fa fa-yahoo"></a>
          <a href="#" class="fa fa-reddit"></a>
          <a href="#" class="fa fa-rss"></a>
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
            <div class="card">
              <img src="/question.gif" width="500" height="600">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

localStorage.clear();
let quizzData;

const questionElement = document.getElementById("question");
const proposalsElement = document.getElementById("proposals");
  
let currentQuestion = 0;
let score = 0;
  
async function showQuestion() {
  quizzData = await getQuestionsApi();
    

  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  const question = quizzData[currentQuestion];
  questionElement.innerText = question.label
  
  proposalsElement.innerHTML = "";
  question.proposals.forEach(proposal => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
  
async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  // let chosedProposal = [];
  for (let i = 0; i < proposals.length; i++) {
      
    if (selectedButton.innerText === proposals[i].label) {
      // chosedProposal.push(proposals[i]);
      saveAnswer(proposals[i]);
    }
  }

  // let point = await evaluate(chosedProposal);

  // score = score + point;
  
  currentQuestion++;
  
  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
async function showResult() {
  let score = await evaluate(getAnswers());
  quiz.innerHTML = `
    <h1>Quizz Finis!</h1>
    <p>Ton score: ${score}/${quizzData.length}</p>
  `;
}
  

showQuestion();