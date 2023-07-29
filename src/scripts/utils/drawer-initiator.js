const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    document.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    if (
      drawer.classList.contains('open') &&
      !drawer.parentElement.contains(event.target)
    ) {
      drawer.classList.remove('open');
    }
  },
};

export default DrawerInitiator;
