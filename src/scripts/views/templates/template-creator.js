import CONFIG from '../../globals/config';

const hero = () => `
      
        <h1>Flash Offer</h1>
        <p>We are here with the best
          deserts intown.
        </p>
        <button>Order</button>
`;

const section2 = () => `
  <div class="container">
    <h1>Today New Arivable</h1>
    <p>Best of the today  food list update</p>
  </div>
`;

const restoList = (resto) => `
<div class="resto-item">
    <div class="resto-item__header">
      <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}"/>
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
    </div>
  </div>
`;

const bookingText = `
  <div class="judulBooking">
    <h1>Today New Arivable</h1>
    <p>Best of the today  food list update</p>
  </div>
`;

const bookingResto = (restoBooking) => `
  <div class="booking">
    <div class="booking-item__header">
      <img class="movie__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restoBooking.pictureId}" alt="${restoBooking.name}" loading="lazy">
      <!-- Tambahkan atribut loading="lazy" di atas -->
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restoBooking.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3>${restoBooking.name}</h3>
      <a class="view" href="/#/detail/${restoBooking.id}" type="button">View</a>
    </div>
  </div>
`;

const LikeRestoContent = (restoBooking) => `

  <div class="likeElement">
    <div class="booking-item__header">
      <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restoBooking.image}" alt="${restoBooking.name}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restoBooking.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3>${restoBooking.name}</h3>
      <a class="view" href="/#/detail/${restoBooking.id}" type="button">View</a>
    </div>
  </div>
`;

const createDetailResto = (resto) => `
  <h2 class='resto-name'>${resto.name}</h2>
  <p>${resto.city} ${resto.address}</p>
  <img class="resto__poster" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/113/1000/500'}" alt="${resto.name}"/>

  <div class="resto__desc">
    <h3>Deskripsi</h3>
    <p>${resto.description}</p>
  </div>
`;

const menuDrink = (menuDrik, index) => `
  <tr>
    <td>${index}</td>
    <td>${menuDrik.name}</td>
  </tr>
`;

const menuFood = (food, index) => `
  <tr>
    <td>${index}</td>
    <td>${food.name}</td>
  </tr>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  hero,
  section2,
  restoList,
  bookingResto,
  LikeRestoContent,
  bookingText,
  createDetailResto,
  menuDrink,
  menuFood,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
