class Main extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <main id="mainContent" tabindex="0">
        <div class="wrapper space">
          <section class="space">
            <h2>Explore Restaurants</h2>
            <p>
              Looking for the best restaurants? Our app has a comprehensive list
              of restaurants in Indonesia. Whether you're in the mood, we've got
              you covered. Find your new favorite restaurant today!
            </p> 
            <div id="restaurants" class="space"></div>
          </section>
          <section id="support" class="space">
            <h2>Supported By</h2>
            <div class="supportWrapper">
              <div class="logo-support">
                <img src="./images/dicoding.png" alt="Dicoding logo" width="189" height="52" />
              </div>
              <div class="logo-support">
                <img
                  src="./images/logo-bdd.png"
                  alt="Baparekraf Developer Day logo"
                  width="200"
                  height="111"
                />
              </div>
              <div class="logo-support">
                <img
                  src="./images/logo-kemenparekraf.png"
                  alt="Kemenparekraf/Baparekraf logo"
                  width="200"
                  height="200"
                />
              </div>
              <div class="logo-support">
                <img
                  src="./images/logo-wonderful-indonesia.png"
                  alt="Wonderfull Indonesia logo"
                  width="200"
                  height="87"
                />
              </div>
            </div>
            </div>
          </section>
        </div>
      </main>`;
  }
}

customElements.define('content-lapar', Main);
