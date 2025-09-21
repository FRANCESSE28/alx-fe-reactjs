import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await searchUsers(username, location, minRepos);
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Advanced Search Form */}
      <form onSubmit={handleSearch} className="grid gap-4 mb-6">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Results */}
      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center border p-4 rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
