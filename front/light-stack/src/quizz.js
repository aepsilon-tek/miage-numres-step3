import { evaluate, getQuestionsApi, getProposalApi } from './store.js';
import './style.css';

export let quizzData; // Contient toutes les questions et leurs propositions
export let currentQuestion;
export let score;

let questionElement;
let proposalsElement;

// Initialisation du Quizz
export async function initQuizz() {
  quizzData = [];
  localStorage.clear();

  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");

  currentQuestion = 0;
  score = 0;

  // Charge toutes les questions et propositions une seule fois
  await loadQuestionsAndProposals();

  showQuestion();
}

async function loadQuestionsAndProposals() {
  try {
    const questions = await getQuestionsApi();

    const questionsWithProposals = await Promise.all(
      questions.map(async (question) => {
        const proposals = await getProposalApi(question.id);
        return { ...question, proposals };
      })
    );

    quizzData = questionsWithProposals;
  } catch (error) {
    console.error("Erreur lors du chargement des questions :", error);
  }
}

// Affiche la question actuelle
function showQuestion() {
  const question = quizzData[currentQuestion];

  questionElement.innerText = question.label;
  proposalsElement.innerHTML = "";

  question.proposals.forEach((proposal) => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    button.addEventListener("click", selectAnswer);
    proposalsElement.appendChild(button);
  });
}

// Gestion de la réponse sélectionnée
async function selectAnswer(e) {
  const selectedButton = e.target;
  const currentProposals = quizzData[currentQuestion].proposals;

  // Vérifie quelle proposition a été sélectionnée
  const chosenProposal = currentProposals.find(
    (proposal) => proposal.label === selectedButton.innerText
  );

  if (chosenProposal) {
    const point = await evaluate([chosenProposal]);
    score += point;
  }

  currentQuestion++;

  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Affiche le résultat final
function showResult() {
  document.getElementById("quiz").innerHTML = `
    <h1>Quizz Terminé !</h1>
    <p>Ton score : ${score} / ${quizzData.length}</p>
  `;
}
