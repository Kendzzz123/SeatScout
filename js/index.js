    try {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');

      // Only run this if both elements actually exist
      if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      } else {
        console.warn("Navbar toggle skipped: 'hamburger' or 'navLinks' not found.");
      }

    } catch (error) {
      console.error("Error in navbar script:", error);
    }

    //start for carousel
    /* Carousel + spotlight logic */
    const carousels = document.querySelectorAll('.carousel'); // supports multiple carousels

    carousels.forEach(carousel => {
      const slides = Array.from(carousel.querySelectorAll('.slide'));
      let index = 0;
      let timer = null;
      const AUTOPLAY_MS = 5000;

      function setSpotForSlide(slide) {
        const spotlight = slide.querySelector('.spotlight');
        const coords = slide.dataset.spot || '50% 50%';
        spotlight.style.setProperty('--spot-x', coords.split(' ')[0]);
        spotlight.style.setProperty('--spot-y', coords.split(' ')[1]);
        spotlight.style.opacity = 0.999;
      }

      function updateActiveSlide(newIndex) {
        newIndex = ((newIndex % slides.length) + slides.length) % slides.length;
        slides.forEach((s, i) => {
          s.classList.toggle('active', i === newIndex);
          const dotButtons = s.querySelectorAll('.dot');
          dotButtons.forEach(btn => btn.classList.remove('active'));
          const toActivate = s.querySelector(`.dot[data-index="${newIndex}"]`);
          if (toActivate) toActivate.classList.add('active');
        });
        setSpotForSlide(slides[newIndex]);
        index = newIndex;
      }

      carousel.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', e => {
          const targetIndex = Number(e.currentTarget.dataset.index);
          stopAutoplay();
          updateActiveSlide(targetIndex);
          startAutoplay();
        });
      });

      function startAutoplay() {
        stopAutoplay();
        timer = setInterval(() => {
          updateActiveSlide(index + 1);
        }, AUTOPLAY_MS);
      }

      function stopAutoplay() {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      }

      setSpotForSlide(slides[index]);
      startAutoplay();

      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);
    });
    //end for carousel

    //start for category
    document.querySelectorAll('.carousel-container').forEach(container => {
      const eventCarousel = container.querySelector('.event-carousel');
      const leftBtn = container.querySelector('.carousel-btn.left');
      const rightBtn = container.querySelector('.carousel-btn.right');
      const cards = eventCarousel.querySelectorAll('.event-card');
      let currentSlide = 0;
      const cardsPerSlide = 3;
      const totalSlides = Math.ceil(cards.length / cardsPerSlide);

      function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 16;
        eventCarousel.style.transform = `translateX(-${currentSlide * cardWidth * cardsPerSlide}px)`;
      }

      rightBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      });

      leftBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
      });
    });

    // ELEMENTS
    const locationBtn = document.querySelector('.action-btn:nth-child(1)');
    const dateBtn = document.querySelector('.action-btn:nth-child(2)');
    const locationModal = document.getElementById('locationModal');
    const dateModal = document.getElementById('dateModal');

    let activeLocation = 'All';
    let activeDate = 'All';

    // OPEN MODALS
    locationBtn.addEventListener('click', () => {
      renderLocationModal();
      locationModal.style.display = 'flex';
    });

    dateBtn.addEventListener('click', () => {
      renderDateModal();
      dateModal.style.display = 'flex';
    });

    // LOCATION MODAL
    function renderLocationModal() {
      const container = locationModal.querySelector('.modal-content');
      container.innerHTML = '<h4>Select Location</h4>';
      const locations = ['All', 'Manila', 'Makati', 'Quezon City', 'Taguig', 'Pasig'];
      locations.forEach(loc => {
        const btn = document.createElement('button');
        btn.textContent = loc;
        btn.addEventListener('click', () => {
          activeLocation = loc;
          document.querySelector('.location').textContent = loc === 'All' ? 'All Locations' : `${loc}, PH`;
          locationModal.style.display = 'none';
        });
        container.appendChild(btn);
      });
    }

    // DATE MODAL
    function renderDateModal() {
      const container = dateModal.querySelector('.modal-content');
      container.innerHTML = '<h4>Select Date</h4>';
      const grid = document.createElement('div');
      grid.classList.add('date-grid');
      const dates = ['All', 'Nov 2025', 'Dec 2025', 'Jan 2026'];
      dates.forEach(dt => {
        const btn = document.createElement('button');
        btn.textContent = dt;
        btn.addEventListener('click', () => {
          activeDate = dt;
          dateModal.style.display = 'none';
        });
        grid.appendChild(btn);
      });
      container.appendChild(grid);
    }

    // CLOSE MODALS ON OUTSIDE CLICK
    window.addEventListener('click', e => {
      if (e.target === locationModal) locationModal.style.display = 'none';
      if (e.target === dateModal) dateModal.style.display = 'none';
    });
    //end for modal

const eventsData = {
  concerts: {
    cards: [
      { title: 'Sabrina Carpenter', venue: 'SM Arena', location: 'Manila', date: 'Nov 14, 2025', time: '8PM', image: 'images/sabrina.jpg' },
      { title: 'Ariana Grande', venue: 'SM Arena', location: 'Makati', date: 'Nov 15, 2025', time: '8PM', image: 'images/ariana.jpg' },
      { title: 'Harry Styles', venue: 'SM Arena', location: 'Quezon City', date: 'Nov 16, 2025', time: '8PM', image: 'images/harry.jpg' },
      { title: 'Bruno Mars', venue: 'SM Arena', location: 'Manila', date: 'Nov 17, 2025', time: '8PM', image: 'images/bruno.jpg' },
      { title: 'Coldplay', venue: 'MOA Arena', location: 'Taguig', date: 'Nov 18, 2025', time: '7PM', image: 'images/coldplay.jpg' },
    ]
  }
};

const trendingCarousel = document.getElementById("trending-carousel");
const trendingTitle = document.getElementById("trending-title");
const browseSelect = document.getElementById("browse");
const locationTitle = document.querySelector(".location");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

let currentLocation = "Manila";
let currentCategory = "concerts";

// Populate carousel
function renderTrending() {
  trendingCarousel.innerHTML = "";
  const data = eventsData[currentCategory].cards.filter(c => c.location === currentLocation);
  data.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("event-card");
    div.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <div class="event-info">
        <h3>${card.title}</h3>
        <p>${card.venue} · ${card.date} · ${card.time}</p>
      </div>`;
    trendingCarousel.appendChild(div);
  });
  trendingTitle.textContent = `Trending Events near ${currentLocation}`;
}

// Carousel buttons
rightBtn.addEventListener("click", () => {
  trendingCarousel.scrollBy({ left: 300, behavior: "smooth" });
});
leftBtn.addEventListener("click", () => {
  trendingCarousel.scrollBy({ left: -300, behavior: "smooth" });
});

// Change location (mock for now)
document.getElementById("change-location").addEventListener("click", () => {
  const locations = ["Manila", "Makati", "Taguig", "Quezon City"];
  const next = (locations.indexOf(currentLocation) + 1) % locations.length;
  currentLocation = locations[next];
  locationTitle.textContent = `${currentLocation}, PH`;
  renderTrending();
});

// Change category
browseSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  currentCategory = value === "trending" ? "concerts" : value;
  renderTrending();
});

// Initial render
renderTrending();