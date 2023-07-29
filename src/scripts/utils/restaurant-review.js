import CONFIG from '../globals/config';

const restaurantReview = (id) => {
  const formEl = document.querySelector('.form');
  const customerName = document.querySelector('#customer');
  const customerReview = document.querySelector('#review');

  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    const p = document.createElement('p');
    p.classList.add('submit-info');

    const hideInfo = (element, timeout) => {
      setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        element.style.display = 'none';
      }, timeout);
    };

    try {
      const response = await fetch(`${CONFIG.BASE_URL}review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name: customerName.value,
          review: customerReview.value,
        }),
      });
      console.log(response);
      customerName.value = '';
      customerReview.value = '';
      if (response.status >= 200 && response.status < 300) {
        p.textContent = 'Your review has been submitted';
        p.classList.add('success');
        formEl.appendChild(p);
        hideInfo(p, 3000);
      } else {
        p.textContent = 'Error submitting review';
        p.classList.add('error');
        formEl.appendChild(p);
        hideInfo(p, 3000);
      }
    } catch (error) {
      p.textContent = `Error: ${error.message}`;
      formEl.appendChild(p);
    }
  });
};

export default restaurantReview;
