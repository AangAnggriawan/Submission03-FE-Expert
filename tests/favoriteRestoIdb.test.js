import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavoriteResto from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllResto()).forEach(async (resto) => {
      await FavoriteResto.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});
