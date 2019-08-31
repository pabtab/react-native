/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
const BASE_API = 'https://yts.lt/api/v2/';

export default new class Api {
  async getSuggestions(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    const { data } = await query.json();

    return data.movies;
  }

  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json`);
    const { data } = await query.json();
    console.log(data);

    return data.movies;
  }

  async searchMovie(title) {
    const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
    const { data } = await query.json();
    console.log(data);

    return data.movies;
  }
}();
