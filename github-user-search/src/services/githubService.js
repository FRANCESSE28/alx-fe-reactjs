// src/services/githubService.js
export async function searchUsers(query, location = "", minRepos = 0) {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos > 0) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items; // GitHub Search API returns { items: [...] }
  } catch (error) {
    console.error(error);
    return [];
  }
}


