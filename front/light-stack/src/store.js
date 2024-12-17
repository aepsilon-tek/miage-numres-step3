export const baseUrl = "https://8080-savepierre-miagenumress-nd1jdgvuigt.ws-eu117.gitpod.io";

export function getQuestions() {
  let questions = localStorage.getItem('questions');
  return questions ? JSON.parse(questions) : [];
}

export function setQuestions(questions) {
  localStorage.setItem('questions', JSON.stringify(questions));
}

export function getAnswers() {
  let answers = localStorage.getItem('answers');
  return answers ? JSON.parse(answers) : [];
}

export function saveAnswer(data) {
  const answers = getAnswers();
  answers.push(data);
  localStorage.setItem('answers', JSON.stringify(answers));
}

export async function getQuestionsApi() {
  const url = `${baseUrl}/quizz/questions`;

  // Vérifie si les questions existent déjà en localStorage
  if (localStorage.getItem('questions')) {
    console.log("Questions chargées depuis le localStorage");
    return JSON.parse(localStorage.getItem('questions'));
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    // Stocker les questions dans localStorage
    localStorage.setItem('questions', JSON.stringify(json));
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProposalApi(idQuestion) {
  const proposalsKey = `proposals_${idQuestion}`;

  // Vérifie si les propositions pour cette question existent en localStorage
  if (localStorage.getItem(proposalsKey)) {
    console.log(`Propositions pour ${idQuestion} chargées depuis le localStorage`);
    return JSON.parse(localStorage.getItem(proposalsKey));
  }

  const url = `${baseUrl}/quizz/questions/${idQuestion}/proposals`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    // Stocker les propositions pour cette question dans localStorage
    localStorage.setItem(proposalsKey, JSON.stringify(json));
    return json;
  } catch (error) {
    console.error(error.message);
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

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erreur :", error);
  }
}
