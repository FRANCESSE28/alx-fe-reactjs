// src/services/githubService.js
export async function searchUsers(query, location = "") {
  try {
    let searchQuery = query;
    if (location) {
      searchQuery += `+location:${location}`;
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items; // GitHub search API returns { items: [...] }
  } catch (error) {
    console.error(error);
    return [];
  }
}

