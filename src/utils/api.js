/* eslint-disable no-undef */
const BASE_API = 'https://yts.lt/api/v2/';

export default new class Api {
  async getSuggestions(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    const { data } = await query.json();
    console.log(data);

    return data.movies;
  }
}();
