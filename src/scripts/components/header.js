class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
      <div class="headerWrapper">
        <div class="headerNav">
          <div class="logo">
            <img src="./icons/icon-x72.png" width="44" height="44" alt="Logo Lapar?" >
            <a href="/">Lapar?</a>
          </div>
          <div class="mobileNav">
            <button id="mobileBtn" aria-label="open navigation">
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
      </div>
      <div class="hero">
        <div class="hero__title">
          <h1>We Provide the best Restaurants</h1>
        </div>
        <picture class="hero__pic">
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image-small.webp" width="600" height="337.5" type="image/webp">
          <source media="(min-width: 601px)" srcset="./images/heros/hero-image-large.webp" width="1000" height="562.5" type="image/webp">
          <img fetchpriority="high" width="1000" height="562.5" src="./images/heros/hero-image-large.jpg" alt="A bowl of food next to a bunch of flowers" >
        </picture>
        <div class="overlay"></div>
        </div>
    </header>`;
  }
}

customElements.define('header-lapar', Header);
