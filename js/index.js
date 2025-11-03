      // Events Data
      const data = {
        concerts: {
          filters: ['All Concerts', 'Rock', 'Pop', 'Rnb', 'Classical'], 
          cards: [
            { title: 'Sabrina Carpenter', genre: 'Pop', venue: 'SM Arena', location: 'Manila', date: '2025-11-14', time: '8:00 PM', link: '#', image: 'images/sabrina.jpg' },
            { title: 'Ariana Grande', genre: 'Pop', venue: 'SM Arena', location: 'Makati', date: '2025-11-15', time: '8:00 PM', link: '#', image: '' },
            { title: 'Harry Styles', genre: 'Rock', venue: 'SM Arena', location: 'Quezon City', date: '2025-11-16', time: '8:00 PM', link: '#' },
            { title: 'Bruno Mars', genre: 'Rnb', venue: 'SM Arena', location: 'Manila', date: '2025-11-17', time: '8:00 PM', link: '#' },
            { title: 'Coldplay', genre: 'Rock', venue: 'MOA Arena', location: 'Taguig', date: '2025-11-18', time: '7:00 PM', link: '#' },
            { title: 'Ed Sheeran', genre: 'Pop', venue: 'RCBC Plaza', location: 'Pasig', date: '2025-11-19', time: '8:00 PM', link: '#' },
            { title: 'Imagine Dragons', genre: 'Rock', venue: 'SM Arena', location: 'Makati', date: '2025-11-20', time: '9:00 PM', link: '#' },
            { title: 'Adele Live', genre: 'Pop', venue: 'MOA Arena', location: 'Manila', date: '2025-11-21', time: '8:00 PM', link: '#' },
            { title: 'Beyonce', genre: 'Rnb', venue: 'SM Arena', location: 'Quezon City', date: '2025-11-22', time: '8:00 PM', link: '#' },
            { title: 'The Weeknd', genre: 'Rnb', venue: 'RCBC Plaza', location: 'Taguig', date: '2025-11-23', time: '8:00 PM', link: '#' }
          ]
        },
        sports: {
          filters: ['All Sports', 'Basketball', 'Football', 'Boxing'],
          cards: [
            { title: 'NBA Live', genre: 'Basketball', venue: 'Quezon City Arena', location: 'Quezon City', date: '2025-11-18', time: '7:00 PM', link: '#' },
            { title: 'Football Cup', genre: 'Football', venue: 'Rizal Stadium', location: 'Makati', date: '2025-11-19', time: '6:00 PM', link: '#' },
            { title: 'Boxing Night', genre: 'Boxing', venue: 'MOA Arena', location: 'Manila', date: '2025-11-20', time: '8:00 PM', link: '#' },
            { title: 'PBA Match', genre: 'Basketball', venue: 'Araneta', location: 'Makati', date: '2025-11-21', time: '7:30 PM', link: '#' },
            { title: 'Local Boxing', genre: 'Boxing', venue: 'MOA Arena', location: 'Quezon City', date: '2025-11-22', time: '8:00 PM', link: '#' },
            { title: 'Football League', genre: 'Football', venue: 'SM Arena', location: 'Taguig', date: '2025-11-23', time: '6:00 PM', link: '#' },
            { title: 'Basketball Finals', genre: 'Basketball', venue: 'RCBC Plaza', location: 'Pasig', date: '2025-11-24', time: '7:00 PM', link: '#' },
            { title: 'Boxing Show', genre: 'Boxing', venue: 'MOA Arena', location: 'Taguig', date: '2025-11-25', time: '8:00 PM', link: '#' },
            { title: 'Soccer Cup', genre: 'Football', venue: 'Araneta', location: 'Manila', date: '2025-11-26', time: '6:00 PM', link: '#' },
            { title: 'Basketball Clash', genre: 'Basketball', venue: 'SM Arena', location: 'Makati', date: '2025-11-27', time: '7:00 PM', link: '#' }
          ]
        },
        theater: {
          filters: ['All Theater', 'Musical', 'Drama', 'Comedy', 'Play'],
          cards: [
            { title: 'Hamilton', genre: 'Musical', venue: 'Cultural Center', location: 'Manila', date: '2025-11-21', time: '7:30 PM', link: '#' },
            { title: 'Romeo & Juliet', genre: 'Drama', venue: 'PETA Theater', location: 'Quezon City', date: '2025-11-22', time: '7:00 PM', link: '#' },
            { title: 'The Book of Mormon', genre: 'Comedy', venue: 'RCBC Plaza', location: 'Makati', date: '2025-11-23', time: '8:00 PM', link: '#' },
            { title: 'Macbeth', genre: 'Play', venue: 'Cultural Center', location: 'Manila', date: '2025-11-24', time: '7:30 PM', link: '#' },
            { title: 'Les Misérables', genre: 'Musical', venue: 'RCBC Plaza', location: 'Taguig', date: '2025-11-25', time: '8:00 PM', link: '#' },
            { title: 'Othello', genre: 'Drama', venue: 'PETA Theater', location: 'Pasig', date: '2025-11-26', time: '7:00 PM', link: '#' },
            { title: 'Comedy Night', genre: 'Comedy', venue: 'RCBC Plaza', location: 'Makati', date: '2025-11-27', time: '8:00 PM', link: '#' },
            { title: 'King Lear', genre: 'Play', venue: 'Cultural Center', location: 'Quezon City', date: '2025-11-28', time: '7:30 PM', link: '#' },
            { title: 'Wicked', genre: 'Musical', venue: 'RCBC Plaza', location: 'Manila', date: '2025-11-29', time: '8:00 PM', link: '#' },
            { title: 'Death of a Salesman', genre: 'Play', venue: 'PETA Theater', location: 'Taguig', date: '2025-11-30', time: '7:30 PM', link: '#' }
          ]
        },
        talkshow: {
          filters: ['All TalkShows', 'Podcast', 'Interview', 'Panel', 'Stand-Up'],
          cards: [
            { title: 'Joe Rogan Experience', genre: 'Podcast', venue: 'MOA Arena', location: 'Manila', date: '2025-11-25', time: '8:00 PM', link: '#' },
            { title: 'Late Night Manila', genre: 'Interview', venue: 'RCBC Plaza', location: 'Makati', date: '2025-11-26', time: '9:00 PM', link: '#' },
            { title: 'Tech Panel 2050', genre: 'Panel', venue: 'Smart Araneta', location: 'Quezon City', date: '2025-11-27', time: '4:00 PM', link: '#' },
            { title: 'Comedy Hour', genre: 'Stand-Up', venue: 'Music Museum', location: 'Makati', date: '2025-11-28', time: '8:00 PM', link: '#' },
            { title: 'Podcast Live', genre: 'Podcast', venue: 'MOA Arena', location: 'Taguig', date: '2025-11-29', time: '8:00 PM', link: '#' },
            { title: 'Interview Night', genre: 'Interview', venue: 'RCBC Plaza', location: 'Pasig', date: '2025-11-30', time: '9:00 PM', link: '#' },
            { title: 'Tech Panel Redux', genre: 'Panel', venue: 'Smart Araneta', location: 'Makati', date: '2025-12-01', time: '4:00 PM', link: '#' },
            { title: 'Stand-Up Special', genre: 'Stand-Up', venue: 'Music Museum', location: 'Manila', date: '2025-12-02', time: '8:00 PM', link: '#' },
            { title: 'Podcast Evening', genre: 'Podcast', venue: 'MOA Arena', location: 'Quezon City', date: '2025-12-03', time: '8:00 PM', link: '#' },
            { title: 'Late Night Redux', genre: 'Interview', venue: 'RCBC Plaza', location: 'Taguig', date: '2025-12-04', time: '9:00 PM', link: '#' }
          ]
        }
      };

      // Gradient colors for dynamic cards
      const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
      ];

      // State
      let currentLocation = 'Manila';
      let currentCategory = 'concerts';
      let activeDate = 'All';

      // Elements
      const trendingCarousel = document.getElementById('trendingCarousel');
      const trendingTitle = document.getElementById('trendingTitle');
      const locationTitle = document.querySelector('.location');
      const browseSelect = document.getElementById('browse');
      const locationBtn = document.getElementById('change-location');
      const dateBtn = document.getElementById('filter-date');
      const locationModal = document.getElementById('locationModal');
      const dateModal = document.getElementById('dateModal');

      // Render Trending Section
      function renderTrending() {
        trendingCarousel.innerHTML = '';

        let filteredCards = data[currentCategory].cards.filter(card => {
          const locationMatch = card.location === currentLocation;
          const dateMatch = activeDate === 'All' || card.date.includes(activeDate.replace(' ', '-'));
          return locationMatch && dateMatch;
        });

        if (filteredCards.length === 0) {
          trendingCarousel.innerHTML = '<p style="padding: 20px; color: #666;">No events found for this location and date combination.</p>';
          return;
        }

        filteredCards.forEach((card, index) => {
          const div = document.createElement('div');
          div.classList.add('event-card');

          // Choose background (image or gradient)
          const bg = card.image
            ? `<img src="${card.image}" alt="${card.title}" style="width:100%;height:180px;object-fit:cover;border-top-left-radius:15px;border-top-right-radius:15px;">`
            : `<div style="width:100%;height:180px;background:${gradients[index % gradients.length]};border-top-left-radius:15px;border-top-right-radius:15px;"></div>`;

          div.innerHTML = `
    ${bg}
    <div class="event-info">
      <h3>${card.title}</h3>
      <p>${card.venue} · ${formatDate(card.date)} · ${card.time}</p>
    </div>
  `;
          trendingCarousel.appendChild(div);
        });
        trendingTitle.textContent = `Trending Events near ${currentLocation}`;
      }

      // Format date
      function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }

      // Location Modal
      function renderLocationModal() {
        const container = locationModal.querySelector('.modal-content');
        container.innerHTML = '<h4>Select Location</h4>';
        const locations = ['Manila', 'Makati', 'Quezon City', 'Taguig', 'Pasig'];
        locations.forEach(loc => {
          const btn = document.createElement('button');
          btn.textContent = loc;
          btn.style.background = loc === currentLocation ? '#ff4f5a' : '#f0f0f0';
          btn.style.color = loc === currentLocation ? 'white' : 'black';
          btn.addEventListener('click', () => {
            currentLocation = loc;
            locationTitle.textContent = `${loc}, PH`;
            locationModal.style.display = 'none';
            updateBrowseOptions();
            renderTrending();
          });
          container.appendChild(btn);
        });
      }

      function updateBrowseOptions() {
        const options = browseSelect.querySelectorAll('option');
        options.forEach(option => {
          const baseText = option.textContent.split(' in ')[0];
          option.textContent = `${baseText} in ${currentLocation}`;
        });
      }

      // Date Modal
      function renderDateModal() {
        const container = dateModal.querySelector('.modal-content');
        container.innerHTML = '<h4>Select Date</h4>';
        const grid = document.createElement('div');
        grid.classList.add('date-grid');
        const dates = ['All', '2025-11', '2025-12', '2026-01'];
        const dateLabels = ['All', 'Nov 2025', 'Dec 2025', 'Jan 2026'];
        dates.forEach((dt, idx) => {
          const btn = document.createElement('button');
          btn.textContent = dateLabels[idx];
          btn.style.background = activeDate === dt ? '#ff4f5a' : '#f0f0f0';
          btn.style.color = activeDate === dt ? 'white' : 'black';
          btn.addEventListener('click', () => {
            activeDate = dt;
            dateModal.style.display = 'none';
            renderTrending();
          });
          grid.appendChild(btn);
        });
        container.appendChild(grid);
      }

      // Event Listeners
      locationBtn.addEventListener('click', () => {
        renderLocationModal();
        locationModal.style.display = 'flex';
      });

      dateBtn.addEventListener('click', () => {
        renderDateModal();
        dateModal.style.display = 'flex';
      });

      browseSelect.addEventListener('change', (e) => {
        const value = e.target.value;

        if (value === 'trending') {
          currentCategory = 'concerts'; // or whichever category you want as default
          trendingTitle.textContent = `Trending Events near ${currentLocation}`;
          exploreLink.textContent = 'Explore Trending →';
        } else {
          currentCategory = value;
          trendingTitle.textContent = `${capitalize(value)} Events near ${currentLocation}`;
          exploreLink.textContent = `Explore ${capitalize(value)} →`;
        }

        activeDate = 'All';
        renderTrending();
      });

      function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      // Close modals on outside click
      window.addEventListener('click', (e) => {
        if (e.target === locationModal) locationModal.style.display = 'none';
        if (e.target === dateModal) dateModal.style.display = 'none';
      });

      // Carousel Navigation for Trending Section
      document.querySelector('#trendingSection .carousel-btn.left').addEventListener('click', () => {
        trendingCarousel.scrollBy({ left: -400, behavior: 'smooth' });
      });

      document.querySelector('#trendingSection .carousel-btn.right').addEventListener('click', () => {
        trendingCarousel.scrollBy({ left: 400, behavior: 'smooth' });
      });

      // Hero Carousel Logic
      const carousels = document.querySelectorAll('.carousel');
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

      // Category Carousels Navigation
      document.querySelectorAll('.trending-events:not(#trendingSection) .carousel-container').forEach(container => {
        const leftBtn = container.querySelector('.carousel-btn.left');
        const rightBtn = container.querySelector('.carousel-btn.right');
        const carousel = container.querySelector('.event-carousel');

        leftBtn.addEventListener('click', () => {
          carousel.scrollBy({ left: -400, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
          carousel.scrollBy({ left: 400, behavior: 'smooth' });
        });
      });

      // Initial render
      renderTrending();
