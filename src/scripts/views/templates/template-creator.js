import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const { foods, drinks } = restaurant.menus;
  return `
  <article class="detail-restaurant">
    <h2 tabindex="0">${restaurant.name} Restaurant</h2>
    <img 
      src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}"
      alt="${restaurant.name} Restaurant"/>
    <address>
      <p>Alamat: ${restaurant.address}</p>
      <p>Kota: ${restaurant.city}</p>
    </address>
    <p class="description">Description: ${restaurant.description}</p>
    <hr>
    <section class="menus">
      <div class="foods">
        <h3>Foods</h3>
        <ul>
          ${foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="drinks">
        <h3>Drinks</h3>
        <ul>
          ${drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </section>

    <hr>
    <section class="reviews">
      <h3>Customer Reviews</h3>
      <form class="form">
        <label for="customer">Name:</label>
        <input id="customer" name="name" autocomplete="name" required/>

        <label for="review">Your Review:</label>
        <textarea id="review" name="review" rows="5" required></textarea>

        <button class="btn-submit">Submit</button>
      </form>
      ${restaurant.customerReviews
        .map((customer) => {
          const date = new Date(customer.date)
            .toLocaleString('ID')
            .slice(0, 10);
          const separator1 = date.indexOf('/');
          const separator2 = date.lastIndexOf('/');
          const datetime = `${date.slice(
            separator2 + 1,
            separator2 + 5,
          )}-${date.slice(separator1 + 1, separator2)}-${date.slice(
            0,
            separator1,
          )}`;
          return `
      <div class="review">
        <div class="title">
          <div class="avatar"></div>
          <div>
            <h4>${customer.name}</h4>
            <time
              datetime=${datetime}>
              ${customer.date}
            </time>
          </div>
        </div>
        <p>${customer.review}</p>
      </div>
      `;
        })
        .join('')} 
    </section>
  </article>`;
};

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <article class="card-skeleton">
      <img src="./images/placeholder.png" width="337.5" height="225" alt="skeleton" />
      <p class="skeleton rating">
        Rating: 100
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </p>
      <h3 class="skeleton">Restaurant name</h3>
      <p class="skeleton">Restaurant city</p>
      <a class="skeleton cta-restaurant" href="#">View Menu</a>
    </article>
  `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <article class="card restaurant-item">
      <img loading="lazy" src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" width="337.5" height="225" alt="${restaurant.name} Restaurant">
    <p class="rating">
      Rating: ${restaurant.rating}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </p>
    <h3>${restaurant.name}</h3>
    <p>Location: ${restaurant.city}</p>
    <a class="cta-restaurant" href="/#/detail/${restaurant.id}">View Menu</a>
  </article>
`;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z"/></svg>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z"/></svg>
  </button>
`;

const spinner = () => `
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
  spinner,
};
