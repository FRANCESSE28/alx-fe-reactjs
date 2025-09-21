import axios from "axios";

const BASE_URL = "https://api.github.com";

// Task 1: fetch user by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// Task 2: advanced search (username, location, repos)
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query.trim()}`);
  return response.data.items; // GitHub returns results in 'items'
};

