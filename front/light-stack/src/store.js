const CACHE_TTL = 3600000;
const MAX_CACHE_SIZE = 1024 * 1024;
const API_URL = import.meta.env.VITE_API_URL || "https://8080-gautierbeno-miagenumres-xggnldii1s7.ws-us117.gitpod.io";
const API_CACHE_TTL = 300000;
const pendingRequests = new Map();

function setWithTTL(key, value) {
  const item = {
    value: value,
    timestamp: Date.now(),
    size: JSON.stringify(value).length
  };

  if (item.size > MAX_CACHE_SIZE) {
    console.warn('Item too large for cache');
    return;
  }

  localStorage.setItem(key, JSON.stringify(item));
}

function cleanupExpiredItems() {
  Object.keys(localStorage).forEach(key => {
    const item = JSON.parse(localStorage.getItem(key));
    if (item && Date.now() - item.timestamp > CACHE_TTL) {
      localStorage.removeItem(key);
    }
  });
}

export function getQuestions() {
  cleanupExpiredItems();

  const cached = localStorage.getItem('questions');
  if (!cached) {
    return [];
  }

  const item = JSON.parse(cached);
  if (Date.now() - item.timestamp > CACHE_TTL) {
    localStorage.removeItem('questions');
    return [];
  }

  return item.value;
}

export function saveQuestions(questions) {
  setWithTTL('questions', questions);
}

export function getAnswers() {
  let answers;
  if (localStorage.getItem('answers') === null) {
    answers = [];
  } else {
    answers = JSON.parse(localStorage.getItem('answers'));
  }
  return answers;
}


export function saveAnswer(data) {
  const answers = getAnswers();
  answers.push(data);
  localStorage.setItem('answers', JSON.stringify(answers));
}

async function batchRequest(endpoint, batchKey, requestFn) {
  const cacheKey = `${endpoint}_${batchKey}`;
  const cachedData = getCachedData(cacheKey);
  if (cachedData) return cachedData;

  if (pendingRequests.has(cacheKey)) {
    return pendingRequests.get(cacheKey);
  }

  const promise = requestFn().then(data => {
    setCachedData(cacheKey, data);
    pendingRequests.delete(cacheKey);
    return data;
  });

  pendingRequests.set(cacheKey, promise);
  return promise;
}

function getCachedData(key) {
  const cached = localStorage.getItem(`api_${key}`);
  if (!cached) return null;

  const item = JSON.parse(cached);
  if (Date.now() - item.timestamp > API_CACHE_TTL) {
    localStorage.removeItem(`api_${key}`);
    return null;
  }
  return item.data;
}

function setCachedData(key, data) {
  const item = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(`api_${key}`, JSON.stringify(item));
}

export async function getQuestionsApi() {
  return batchRequest('questions', 'all', async () => {
    const url = `${API_URL}/quizz/questions`;
    const response = await fetch(url);
    return response.json();
  });
}

export async function getProposalApi(idQuestion) {
  return batchRequest('proposals', idQuestion, async () => {
    const url = `${API_URL}/quizz/questions/${idQuestion}/proposals`;
    const response = await fetch(url);
    return response.json();
  });
}

export async function evaluate(proposals) {
  return batchRequest('evaluate', JSON.stringify(proposals), async () => {
    const url = `${API_URL}/quizz/proposals/evaluate`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proposals),
    });
    return response.json();
  });
}