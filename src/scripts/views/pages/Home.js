import {
  hero, section2, restoList, bookingResto, bookingText,
} from '../templates/template-creator';
import RestourantDBsource from '../../data/restourant-source';

const Home = {
  async render() {
    return `
    <section id="hero"></section>
    <section id="bestOftheFood"></section>
    <section id="restoList"></section>
    <section id="judulRestoBooking"></section>
    <section id="bookingResto"></section>

    `;
  },

  async afterRender() {
    const Hero = document.querySelector('#hero');
    Hero.innerHTML = hero();

    const bestOftheFood = document.querySelector('#bestOftheFood');
    bestOftheFood.innerHTML = section2();

    const restourant = await RestourantDBsource.homeWeb();
    const ListRestoran = document.querySelector('#restoList');
    restourant.forEach((resto) => {
      ListRestoran.innerHTML += restoList(resto);
    });

    const JudulBook = document.querySelector('#judulRestoBooking');
    JudulBook.innerHTML += bookingText;

    const booking = document.querySelector('#bookingResto');
    restourant.forEach((book) => {
      booking.innerHTML += bookingResto(book);
    });
  },
};

export default Home;
