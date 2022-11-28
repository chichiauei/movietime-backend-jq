import MoviesDAO from "./moviesDAO.js";

let fav;

export default class FavoritesDAO {
  static async injectDB(conn) {
    if (fav) {
      return;
    }
    try {
      fav = await conn.db(process.env.MOVIEREVIEWS_NS)
                      .collection('favorites');
    }
    catch(e) {
      console.error(`Unable to connect in FavoritesDAO: ${e}`);
    }
  }

  static async updateFavorites(userId, favorites) {
    try {
      const updateResponse = await fav.updateOne(
        { _id: userId },
        { $set: { favorites: favorites }},
        { upsert: true }
      )
      return updateResponse
    }
    catch(e) {
      console.error(`Unable to update favorites: ${e}`)
      return { error: e }
    }
  }

  static async getFavorites (id) {
    let cursor;
    try {
      cursor = await fav.find({
        _id: id
      });
      const favorites = await cursor.toArray();
      return favorites[0];
    } catch(e) {
      console.error(`Something wrong in getFavorites: ${e}`);
      throw e;
    }
  }

  static async getMovies(id) {
    let cursor;
    let movies = [];
    try {
        cursor = await fav.find({
            _id: id
        });
        const favorites = await cursor.toArray();
        const favoritesIds = favorites[0].favorites;
        for (var i = 0; i < favoritesIds.length; i++) {
            movies[i] = await MoviesDAO.getMovieById(favoritesIds[i]);
        }
        return movies;

    } catch (e) {
        console.error(`Something wrong in getFavoriteMovies: ${e}`);
        throw e;
    }

}
}