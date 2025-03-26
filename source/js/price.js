document.addEventListener('DOMContentLoaded', () => {
  const tabItems = document.querySelectorAll('.price__offers-item');
  const tabButtons = document.querySelectorAll('.price__tab-button');
  const tabContents = document.querySelectorAll('.price__offers-item-content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      tabItems.forEach((item) => {
        item.classList.remove('price__offers-item--active');
      });
      tabButtons.forEach((btn) => btn.classList.remove('price__tab-button--active'));
      tabContents.forEach((content) => content.classList.remove('price__offers-item-content--active'));

      this.classList.add('price__tab-button--active');
      const activeTab = this.parentElement.getAttribute('data-tab');
      document.getElementById(activeTab).classList.add('price__offers-item-content--active');
      this.parentElement.classList.add('price__offers-item--active');
    });
  });
});
