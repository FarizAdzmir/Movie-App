export async function fetchMovies(search = '') {
    const url = search ? `/api/movies?search=${encodeURIComponent(search)}` : '/api/movies'
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }
  
  export async function fetchMovieDetails(id) {
    const response = await fetch(`/api/movies/${id}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }  