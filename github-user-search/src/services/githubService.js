import axios from "axios";

// Search users with advanced filters
export const searchUsers = async (username, location, minRepos) => {
  try {
    let query = username ? `${username}` : "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items; // returns list of users
  } catch (error) {
    throw error;
  }
};

