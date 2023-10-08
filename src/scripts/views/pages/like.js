import FavoriteResto from '../../data/favorite-resto-idb';
import { LikeRestoContent } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="contentLike">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="resto">
    
        </div>
        </div>
  `;
  },

  async afterRender() {
    const resto = await FavoriteResto.getAllResto();
    const RestoCOntainer = document.querySelector('#resto');
    resto.forEach((res) => {
      RestoCOntainer.innerHTML += LikeRestoContent(res);
    });
  },
};

export default Like;
