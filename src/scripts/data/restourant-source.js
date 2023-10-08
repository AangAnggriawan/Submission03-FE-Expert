import API_ENDPOINT from '../globals/api-endpoint';

class RestourantDBsource {
  static async homeWeb() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  // static async menu(id) {
  //   const response = await fetch(API_ENDPOINT.DETAIL(id));
  //   const responseJson = await response.json();
  //   return responseJson.restaurant;
  // }
}

export default RestourantDBsource;
