export const baseUrl = "https://8080-stabbaa24-miagenumresst-utow5pnt2mr.ws-eu117.gitpod.io";

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
  const cacheKey = 'quizz_questions';
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData); 
  }

  const url = `${baseUrl}/quizz/questions`;
  const response = await fetch(url);

  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify(json)); 
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProposalApi(idQuestion) {
  const cacheKey = `quizz_proposals_${idQuestion}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const url = `${baseUrl}/quizz/questions/${idQuestion}/proposals`;
  const response = await fetch(url);

  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify(json));
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

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
