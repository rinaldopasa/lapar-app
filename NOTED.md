# Lapar? - PWA + Testing and Optimized.

## Integration Test

**Scenario - Favorite a Restaurant:**

1. [x] Restaurants haven't been favorited.
2. [x] A button to **favorite** a restaurant is displayed.
3. [x] A **favorite** button clicked by users.
4. [x] Restaurant added to favorited restaurant list.
   1. [x] The Restaurant is already a favorite.
      - No need to save back.
   2. [x] Restaurant data has no **ID**.
      - The app will not save the restaurant.
      - The app will not fail/crash.

**Scenario - Unfavorite a Restaurant:**

1. [x] Restaurant already favorited.
2. [x] A button to **unfavorite** a restaurant is displayed.
3. [x] An **unfavorite** button clicked by users.
4. [x] Restaurant deleted from favorited restaurant list.
   - [x] The restaurant doesn't exist on the list.
   - [x] The app will not fail/crash.

**TODO:**

1. [x] Rename **createFavoriteButtonTemplate** and **createFavoritedButtonTemplate** for more look different.
2. [x] A Negative path to store a restaurant without **ID** should not cause failure/crash.

## End to End Test

1. [x] Favorited one of the restaurants.
2. [x] Unfavorite the restaurant.
3. [x] Customer review.

## Image Optimization

1. [x] Compress the **hero** image, size < 200kb.
2. [x] Apply image responsive techniques to **hero** image, the resolution on mobile and desktop must be different.
3. [x] Apply lazy loading techniques to display list restaurant images.
4. [x] Apply a UI Skeleton approach.
5. [x] Minify the CSS File.

## Bundle Optimization

1. [x] Install **bundle analyzer**.
2. [x] Use **Code Splitting** techniques.

## Deployment

1. [x] Netlify.

**Core Web Vitals**

- **FCP** < 2.5s
- **FID/TBT** < 100ms
- **CLS** < 0.1
