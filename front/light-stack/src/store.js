export const baseUrl = "https://8080-ralphmodad-miagenumress-n21uheo7a6y.ws-eu117.gitpod.io";

const CACHE_DURATION = 3600000;

function isCacheValid(timestamp) {
  return Date.now() - timestamp < CACHE_DURATION;
}

function getCachedData(key, defaultValue = []) {
  const cached = localStorage.getItem(key);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (isCacheValid(timestamp)) {
      return data;
    }
  }
  return defaultValue;
}

function setCachedData(key, data) {
  const cacheData = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(cacheData));
}

export function getQuestions() {
  return getCachedData('questions');
}

export function setQuestions(questions) {
  setCachedData('questions', questions);
}

export function getAnswers() {
  return getCachedData('answers');
}

export function saveAnswer(data) {
  const answers = getAnswers();
  answers.push(data);
  setCachedData('answers', answers);
}

export async function getQuestionsApi() {
  const cachedQuestions = getQuestions();
  if (cachedQuestions.length > 0) {
    return cachedQuestions;
  }
  const url = `${baseUrl}/quizz/questions`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    setQuestions(json); 
    return json;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export async function getProposalApi(idQuestion) {
  const cacheKey = `proposal_${idQuestion}`;
  const cachedProposal = getCachedData(cacheKey);
  if (cachedProposal.length > 0) {
    return cachedProposal;
  }

  const url = `${baseUrl}/quizz/questions/${idQuestion}/proposals`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    setCachedData(cacheKey, json);
    return json;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}
export async function evaluate(proposals) {
  const url = `${baseUrl}/quizz/proposals/evaluate`;

  try {
    const reponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proposals),
    });

    const resultat = await reponse.json();
    return resultat;
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}