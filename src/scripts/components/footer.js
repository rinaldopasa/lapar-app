class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer>
        <p>Made by Rinaldo for Dicoding</p>
        <p>
          Copyright &copy; 2023 &mdash; <span class="footer-logo">Lapar?</span>
        </p>
      </footer>`;
  }
}

customElements.define('footer-lapar', Footer);
