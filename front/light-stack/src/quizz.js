import { evaluate, getProposalApi, getQuestionsApi } from "./store.js";
import "./style.css";

export let quizzData = [];
export let currentQuestion = 0;
export let score = 0;
let currentPage = 1; // Pour la pagination

let questionElement;
let proposalsElement;

export function initQuizz() {
  quizzData = [];
  currentQuestion = 0;
  score = 0;
  currentPage = 1;

  localStorage.clear();

  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");

  loadNextPage();
}

// Fonction pour charger une page de questions
async function loadNextPage() {
  const newQuestions = await getQuestionsApi(currentPage);

  if (newQuestions.length === 0) {
    showResult();
    return;
  }

  quizzData = quizzData.concat(newQuestions);
  currentPage++;
  showQuestion();
}

// Afficher la question actuelle
async function showQuestion() {
  if (currentQuestion >= quizzData.length) {
    await loadNextPage();
    return;
  }

  const question = quizzData[currentQuestion];

  // Récupérer les propositions pour la question courante
  if (!question.proposals) {
    question.proposals = await getProposalApi(question.id);
  }

  questionElement.innerText = question.label;

  proposalsElement.innerHTML = "";
  question.proposals.forEach((proposal) => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

// Sélectionner une réponse et évaluer
async function selectAnswer(e) {
  const selectedLabel = e.target.innerText;
  const question = quizzData[currentQuestion];

  const chosenProposal = question.proposals.find(
    (proposal) => proposal.label === selectedLabel
  );

  const point = await evaluate([chosenProposal]);
  score += point;

  currentQuestion++;

  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Afficher le résultat final
async function showResult() {
  const quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `
    <h1>Quizz Terminé !</h1>
    <p>Ton score : ${score}/${quizzData.length}</p>
  `;
}
