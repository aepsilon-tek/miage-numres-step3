export const baseUrl = "https://8080-bakarouhaja-miagenumres-vvv1hy4orel.ws-eu117.gitpod.io";

export async function getQuestionsApi(page = 1) {
  // Vérifier le cache local avant d'appeler l'API
  const cachedQuestions = localStorage.getItem(`questions_page_${page}`);
  if (cachedQuestions) {
    return JSON.parse(cachedQuestions);
  }

  const url = `${baseUrl}/quizz/questions?page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const questions = await response.json();

    // Stocker les questions dans le cache local
    localStorage.setItem(`questions_page_${page}`, JSON.stringify(questions));
    return questions;
  } catch (error) {
    console.error("Erreur lors de la récupération des questions :", error.message);
    return [];
  }
}

export async function getProposalApi(idQuestion) {
  const cachedProposals = localStorage.getItem(`proposals_${idQuestion}`);
  if (cachedProposals) {
    return JSON.parse(cachedProposals);
  }

  const url = `${baseUrl}/quizz/questions/${idQuestion}/proposals`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const proposals = await response.json();
    localStorage.setItem(`proposals_${idQuestion}`, JSON.stringify(proposals)); // Mise en cache
    return proposals;
  } catch (error) {
    console.error("Erreur lors de la récupération des propositions :", error.message);
    return [];
  }
}

export async function evaluate(proposals) {
  const url = `${baseUrl}/quizz/proposals/evaluate`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proposals),
    });

    return await response.json();
  } catch (error) {
    console.error("Erreur d'évaluation :", error.message);
    return 0; // Retourner 0 en cas d'erreur
  }
}
