// src/services/githubService.js

// fetch basic user data (Task 1)
export const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
};

// 🔹 new: search users with filters (Task 2)
export const searchUsers = async (username, location, minRepos) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await fetch(`https://api.github.com/search/users?${query}`);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  return response.json();
};

