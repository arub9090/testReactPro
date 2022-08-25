import axios from "axios";
const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubCalls = axios.create({
  baseURL: GITHUB_API,
  headers: { Authorization: `${GITHUB_TOKEN}` },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await githubCalls.get(`/search/users?${params}`);
  return res.data.items;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const [res1, res2] = await Promise.all([
    githubCalls.get(`/users/${login}`),
    githubCalls.get(`/users/${login}/repos?${params}`),
  ]);

  if ((res1.status || res2.status) === 404) {
    window.location = "/notfound";
  } else {
    return { res1: res1.data, res2: res2.data };
  }
};
