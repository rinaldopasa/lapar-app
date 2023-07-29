class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
      <div class="headerWrapper">
        <div class="logo">
          <a href="/">Lapar?</a>
        </div>
        <div class="mobileNav">
          <button id="mobileBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path
                d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
              />
            </svg>
            Laper?
          </button>
        </div>
        <nav id="navigationDrawer" class="navigation">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li>
              <a
                href="https://github.com/rinaldopasa"
                target="_blank"
                rel="noopener noreferrer"
                >About Us</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="hero">
        <div class="hero__title">
          <h1>We Provide the best Restaurants</h1>
        </div>
        <picture class="hero__pic">
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image-small.webp" width="600" height="337.5" type="image/webp">
          <source media="(min-width: 601px)" srcset="./images/heros/hero-image-large.webp" width="1000" height="562.5" type="image/webp">
          <img width="1000" height="562.5" src="./images/heros/hero-image-large.jpg" alt="A bowl of food next to a bunch of flowers" >
        </picture>
      </div>
    </header>`;
  }
}

customElements.define('header-lapar', Header);
