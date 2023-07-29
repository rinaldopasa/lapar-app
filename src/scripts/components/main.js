class Main extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <main id="mainContent" tabindex="0">
        <div class="wrapper space">
          <section id="restaurants" class="space">
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
