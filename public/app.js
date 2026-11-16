const apiRoutes = {
  brand: '/api/brand',
  menu: '/api/menu',
  gallery: '/api/gallery',
  testimonials: '/api/testimonials',
  stats: '/api/stats',
  performance: '/api/performance'
};

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const toastNode = document.getElementById('toast');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

function showToast(message) {
  toastNode.textContent = message;
  toastNode.classList.add('show');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toastNode.classList.remove('show');
  }, 2500);
}

function renderStats(items) {
  const target = document.getElementById('stats-grid');
  if (!target) return;

  target.innerHTML = items
    .map(
      (item) => `
        <div class="stat-box">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join('');
}

function renderMenu(items) {
  const target = document.getElementById('menu-grid');
  if (!target) return;

  const imageMap = {
    'Smoke Burner Stack': 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    'Pink Haze Tacos': 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80',
    'Midnight Lab Bowl': 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    'Reactor Rib Plate': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
  };

  target.innerHTML = items
    .map(
      (item) => `
        <article class="menu-card" data-category="${item.category}">
          <div class="menu-card-image" style="background-image: url('${imageMap[item.title] || 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'}')">
            <span class="menu-card-tag">${item.tag}</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-head">
              <h4>${item.title}</h4>
              <span class="price">${item.price}</span>
            </div>
            <span class="category">${item.category}</span>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const filterValue = chip.dataset.filter;
      document.querySelectorAll('.filter-chip').forEach((button) => button.classList.toggle('active', button === chip));

      target.querySelectorAll('.menu-card').forEach((card) => {
        const shouldShow = filterValue === 'all' || card.dataset.category === filterValue;
        card.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });
}

function renderGallery(items) {
  const target = document.getElementById('gallery-grid');
  if (!target) return;

  target.innerHTML = items
    .map(
      (item) => `
        <figure class="gallery-item">
          <div class="gallery-image" style="background-image: url('${item.image}')"></div>
          <figcaption>
            <strong>${item.title}</strong>
            <p>${item.caption}</p>
          </figcaption>
        </figure>
      `
    )
    .join('');
}

function renderTestimonials(items) {
  const target = document.getElementById('testimonial-grid');
  if (!target) return;

  target.innerHTML = items
    .map(
      (item) => `
        <article class="quote-card">
          <div class="quote-mark">“</div>
          <p>${item.quote}</p>
          <strong>${item.name}</strong>
          <span>${item.role}</span>
        </article>
      `
    )
    .join('');
}

function renderPerformance(data) {
  const target = document.getElementById('performance-metrics');
  if (!target) return;

  const entries = [
    { label: 'Uptime', value: data.uptime },
    { label: 'Queue', value: data.queue },
    { label: 'Latency', value: data.response },
    { label: 'Conversion', value: data.conversion }
  ];

  target.innerHTML = entries
    .map(
      (item) => `
        <div class="metric-box">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join('');
}

function hydrateBrand() {
  fetchJson(apiRoutes.brand)
    .then((brand) => {
      document.getElementById('brand-location').textContent = brand.location;
      document.getElementById('brand-status').textContent = brand.status;
    })
    .catch((error) => {
      console.error(error);
    });
}

async function initSite() {
  try {
    const [brandData, menuData, galleryData, testimonialData, statsData, performanceData] = await Promise.all([
      fetchJson(apiRoutes.brand),
      fetchJson(apiRoutes.menu),
      fetchJson(apiRoutes.gallery),
      fetchJson(apiRoutes.testimonials),
      fetchJson(apiRoutes.stats),
      fetchJson(apiRoutes.performance)
    ]);

    document.getElementById('brand-location').textContent = brandData.location;
    document.getElementById('brand-status').textContent = brandData.status;
    renderMenu(menuData);
    renderGallery(galleryData);
    renderTestimonials(testimonialData);
    renderStats(statsData);
    renderPerformance(performanceData);
  } catch (error) {
    console.error('Failed to initialize site content:', error);
    showToast('Unable to load the latest Capn Cook data.');
  }
}

function setupForms() {
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        eventType: document.getElementById('event-type').value,
        guests: document.getElementById('guest-count').value,
        date: document.getElementById('event-date').value,
        notes: document.getElementById('event-notes').value
      };

      try {
        const response = await fetch('/api/booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Booking submission failed.');

        bookingForm.reset();
        showToast(result.message);
      } catch (error) {
        showToast(error.message);
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        service: document.getElementById('contact-service').value,
        message: document.getElementById('contact-message').value
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Contact submission failed.');

        contactForm.reset();
        showToast(result.message);
      } catch (error) {
        showToast(error.message);
      }
    });
  }
}

initSite();
setupForms();
