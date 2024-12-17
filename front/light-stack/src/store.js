export const baseUrl = "https://8080-theostringa-miagenumres-8cbklkff7wu.ws-eu117.gitpod.io";


export function getLocalStorageItem(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error(`Erreur lors de la récupération de ${key} :`, error);
    return [];
  }
}


export function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Erreur lors de l'enregistrement de ${key} :`, error);
  }
}


export function getQuestions() {
  return getLocalStorageItem('questions');
}


export function setQuestions(questions) {
  setLocalStorageItem('questions', questions);
}


export function getAnswers() {
  return getLocalStorageItem('answers');
}


export function saveAnswer(data) {
  const answers = getAnswers();
  answers.push(data);
  setLocalStorageItem('answers', answers);
}


async function fetchFromApi(endpoint, options = {}) {
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erreur lors de la requête ${url} :`, error);
    return null;
  }
}


export async function getQuestionsApi() {
  const cachedQuestions = getQuestions();
  if (cachedQuestions.length > 0) {
    return cachedQuestions;
  }
  const questions = await fetchFromApi('/quizz/questions');
  if (questions) {
    setQuestions(questions);
  }
  return questions;
}


export async function getProposalApi(idQuestion) {
  const cacheKey = `proposals_${idQuestion}`;
  const cachedProposals = getLocalStorageItem(cacheKey);
  if (cachedProposals.length > 0) {
    return cachedProposals;
  }
  const proposals = await fetchFromApi(`/quizz/questions/${idQuestion}/proposals`);
  if (proposals) {
    setLocalStorageItem(cacheKey, proposals);
  }
  return proposals;
}


export async function evaluate(proposals) {
  return await fetchFromApi('/quizz/proposals/evaluate', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(proposals)
  });
}