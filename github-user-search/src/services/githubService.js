import axios from "axios";

// Function to fetch a single user's data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // returns user info
  } catch (error) {
    throw error; // we'll handle it in the component
  }
};
