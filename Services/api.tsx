export const TMDB_Config = {
  Base_URL: "https://api.themoviedb.org/3",
  Api_Key: process.env.EXPO_Key,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_Key}`,
  },
};

// export default async function fetchMovies({ query }: { query: string }) {
export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_Config.Base_URL}/search/movie?query${encodeURIComponent(query)}`
    : `${TMDB_Config.Base_URL}/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_Config.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }
  const data = await response.json();
  return data.results;
};
