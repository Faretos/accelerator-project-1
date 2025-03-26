document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.faq__button');
  const tabs = document.querySelectorAll('.faq__tab');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('faq__button--active'));
      tabs.forEach((tab) => tab.classList.remove('faq__tab--active'));

      button.classList.add('faq__button--active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('faq__tab--active');
    });
  });

  document.querySelectorAll('.faq__accordion-tab-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();

      const accordionTab = button.closest('.faq__accordion-tab');
      accordionTab.classList.toggle('faq__accordion-tab--active');
      button.classList.toggle('faq__accordion-tab-button--active');

      const answer = accordionTab.querySelector('p');
      if (accordionTab.classList.contains('faq__accordion-tab--active')) {
        answer.style.maxHeight = `${answer.scrollHeight }px`;
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
});

