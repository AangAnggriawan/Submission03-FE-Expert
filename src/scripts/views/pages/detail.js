import UrlParser from '../../routes/url-parser';
import RestourantDBsource from '../../data/restourant-source';
import {
  hero,
  createDetailResto,
  menuDrink,
  menuFood,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteResto from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <section id="hero"></section>
      <div id="restoDetail" class="restoDetail"></div>
      <div id="drink">
        <table id="drink-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Menu Minuman</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div id="foodMakanan">
        <table id="food-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Menu Makanan</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div id="customer-reviews">
        <h2>Customer Reviews</h2>
        <ul id="reviews-list"></ul>
      </div>

      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const heroElement = document.querySelector('#hero');
    heroElement.innerHTML = hero();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestourantDBsource.detailResto(url.id);
    const { drinks: menuResto, foods: menuFoodResto } = resto.menus;
    const reviewFod = resto.customerReviews;

    const restoContainer = document.querySelector('#restoDetail');
    restoContainer.innerHTML = createDetailResto(resto, menuResto);

    // Menampilkan daftar menu minuman dalam tabel
    const drinkTable = document.querySelector('#drink-table tbody');
    menuResto.forEach((menu1, index) => {
      drinkTable.innerHTML += menuDrink(menu1, index + 1);
    });

    // Menampilkan daftar menu makanan dalam tabel
    const foodTable = document.querySelector('#food-table tbody');
    menuFoodResto.forEach((menu2, index) => {
      foodTable.innerHTML += menuFood(menu2, index + 1);
    });

    // Di dalam metode afterRender
    const customerReviewsElement = document.querySelector('#reviews-list');
    const reviews = reviewFod;

    if (reviews.length > 0) {
      customerReviewsElement.innerHTML = reviews
        .map((review) => `
          <li>
            <strong>${review.name}</strong>
            <p>${review.date}</p>
            <p>${review.review}</p>
          </li>
        `)
        .join('');
    } else {
      customerReviewsElement.innerHTML = '<li>Tidak ada ulasan pelanggan saat ini.</li>';
    }

    // Like Button
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteResto,
      resto: {
        id: resto.id,
        name: resto.name,
        rating: resto.rating,
        image: resto.pictureId,
      },
    });
  },
};

export default Detail;
