const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer);
    });

    document.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer);
    });
  },

  _toggleDrawer(event, button, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.setAttribute(
      'aria-label',
      drawer.classList.contains('open')
        ? 'close navigation'
        : 'open navigation',
    );
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    if (
      drawer.classList.contains('open') &&
      !drawer.parentElement.contains(event.target)
    ) {
      drawer.classList.remove('open');
      button.setAttribute('aria-label', 'open-navigation');
    }
  },
};

export default DrawerInitiator;
