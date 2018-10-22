import axios from 'axios';
export const CREATE_TOPIC = 'create-topic';
export const FETCH_TOPICS = 'fetch-topics';
export const POST_TOPIC = 'post-topic';
export const FETCH_SUBJECTS = 'fetch-subjects';
export const FETCH_CARDS = 'fetch-cards';

const ROOT_URL = 'http://localhost:3001/api/topics';

export const fetchTopics = () => {
  const req = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_TOPICS,
    payload: req
  };
};

export const postTopic = value => {
  const req = axios.post(`${ROOT_URL}`, { title: value });
  return {
    type: POST_TOPIC,
    payload: req
  };
};

export const createTopic = topic => {
  return { type: CREATE_TOPIC, topic };
};

export const fetchSubjects = id => {
  const req = axios.get(`${ROOT_URL}/${id}/subjects`);
  return {
    type: FETCH_SUBJECTS,
    payload: req
  };
};

export const fetchCards = path => {
  console.log(path);
  const req = axios.get(`http://localhost:3001/api${path}/cards`);
  return {
    type: FETCH_CARDS,
    payload: req
  };
};
