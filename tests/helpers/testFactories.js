import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteResto from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteResto,
    resto,
  });
};
export { createLikeButtonPresenterWithResto };
