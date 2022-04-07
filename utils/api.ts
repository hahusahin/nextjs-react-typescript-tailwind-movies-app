import { API_BASE_URL, API_KEY } from "./config"

type API = {
  id: string,
  title: string,
  url: string
}

const apis: API[] = [
  {
    id: "popular",
    title: "Popular", 
    url: `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`
  },
  {
    id: "action",
    title: "Action", 
    url: `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  {
    id: "adventure",
    title: "Adventure", 
    url: `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`
  },
  {
    id: "animation",
    title: "Animation", 
    url: `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
  },  
  {
    id: "comedy",
    title: "Comedy", 
    url: `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  {
    id: "crime",
    title: "Crime", 
    url: `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80`
  },
  {
    id: "drama",
    title: "Drama", 
    url: `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`
  },
  {
    id: "horror",
    title: "Horror", 
    url: `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
]

export default apis