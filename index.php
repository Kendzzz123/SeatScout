<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<style>
    /*This is the start of the navbar*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f2f2f2;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1d232a;
  padding: 12px 40px;
  height: 75px;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
}

.brand {
  font-size: 1.3rem;
  font-weight: 700;
}

.brand .seat {
  color: #fff;
}

.brand .scout {
  color: #e63946;
}

.search-box {
  margin-left: 20px;
  width: 50%;
  position: relative;
}


.search-box input {
  padding: 10px 20px;
  width: 500px;
  border-radius: 25px;
  border: 1px solid #555;
  background-color: transparent;
  color: #fff;
  outline: none;
  font-size: 0.95rem;
}

.search-box input::placeholder {
  color: #ccc;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 90px;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #e63946;
}

.navbar-links .login {
  font-weight: 700;
}
  /*This is the end of the navbar*/

  /*This is the start of the carousel*/
    :root {
      --carousel-height: 420px;
    }

    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #fff;
    }

    .carousel {
      position: relative;
      width: 100%;
      height: var(--carousel-height);
      overflow: hidden;
      border-radius: 12px;
      max-width: 1200px;
      margin: 32px auto;
      background: #000;
    }

    .slide {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity .6s ease;
      pointer-events: none;
    }

    .slide.active {
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    }

    .slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    /* ---------- Spotlight layer ---------- */
    /* It's an absolutely-positioned layer above the image but below overlay */
    .spotlight {
      position: absolute;
      inset: 0;
      z-index: 1;
      /* below overlay (overlay uses z-index:2) */
      pointer-events: none;
      /* spotlight uses a radial gradient that reads coords from CSS vars */
      background:
        radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%),
          rgba(255, 255, 255, 0.18) 0%,
          rgba(255, 255, 255, 0.10) 10%,
          rgba(0, 0, 0, 0) 40%),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.16));
      transition: background-position 700ms cubic-bezier(.22, .9, .3, 1),
        background 700ms cubic-bezier(.22, .9, .3, 1);
      mix-blend-mode: screen;
      /* brightens area under spotlight */
    }

    /* Slight floating/slow zoom on active slide's image */
    .slide.active img {
      transform-origin: center;
      transition: transform 8s ease-in-out;
      animation: subtleZoom 8s ease-in-out infinite;
    }

    @keyframes subtleZoom {
      0% {
        transform: scale(1.03) translateY(-6px);
      }

      50% {
        transform: scale(1.06) translateY(-10px);
      }

      100% {
        transform: scale(1.03) translateY(-6px);
      }
    }

    /* Overlay (text + button + dots) */
    .overlay {
      position: absolute;
      bottom: 34px;
      left: 34px;
      background: rgba(0, 0, 0, 0.66);
      padding: 18px 26px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2;
      /* above the spotlight */
      backdrop-filter: blur(6px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
      max-width: 42%;
    }

    .overlay h2 {
      color: #fff;
      font-size: 2rem;
      margin: 0;
      line-height: 1;
    }

    .btn {
      background: #e50914;
      color: white;
      border: none;
      padding: 10px 18px;
      border-radius: 28px;
      cursor: pointer;
      font-weight: 600;
      width: fit-content;
      box-shadow: 0 6px 12px rgba(229, 9, 20, 0.15);
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    /* Dots inside overlay */
    .dots {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 6px;
    }

    .dot {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.22);
      cursor: pointer;
      transition: transform 260ms, background 260ms, box-shadow 260ms;
      border: 0;
    }

    .dot.active {
      background: #f25b5b;
      box-shadow: 0 6px 10px rgba(242, 91, 91, 0.3);
      transform: translateY(-2px);
    }

    /* Event Info Section (below carousel) */
    .event-info {
      margin: 40px auto;
      max-width: 1200px;
      padding: 0 20px;
      font-family: 'Poppins', sans-serif;
    }

    .event-info .browse {
      color: #6f747f;
      font-weight: 500;
      text-decoration: none;
      font-size: 0.95rem;
    }

    .event-info .browse:hover {
      text-decoration: underline;
    }

    .event-info .location {
      font-size: 2rem;
      font-weight: 700;
      color: #111;
      margin: 8px 0 16px;
    }

    .event-info .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .action-btn {
      border: 1px solid #ccc;
      background: #fff;
      color: #111;
      font-weight: 500;
      border-radius: 25px;
      padding: 8px 18px;
      cursor: pointer;
      transition: background 0.3s, box-shadow 0.3s;
    }

    .action-btn:hover {
      background: #f3f3f3;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    /* Small screen tweaks */
    @media (max-width: 600px) {
      .event-info .location {
        font-size: 1.6rem;
      }

      .event-info .buttons {
        gap: 10px;
      }

      .action-btn {
        font-size: 0.9rem;
        padding: 6px 14px;
      }
    }


    /* responsive tweaks */
    @media (max-width: 900px) {
      :root {
        --carousel-height: 320px;
      }

      .overlay {
        max-width: 65%;
        left: 20px;
        bottom: 24px;
        padding: 14px 18px;
      }

      .overlay h2 {
        font-size: 1.45rem;
      }
    }

    @media (max-width: 520px) {
      :root {
        --carousel-height: 260px;
      }

      .overlay {
        max-width: 90%;
        left: 14px;
        bottom: 18px;
        padding: 12px 14px;
      }

      .overlay h2 {
        font-size: 1.2rem;
      }

      .btn {
        padding: 8px 12px;
      }
    }
  /*This is the end of the carousel*/

  /*This is the start of the carousel*/
  /*This is the end of the carousel*/
  </style>
</head>
<body>
  <!--This is the start for navbar-->
    <nav class="navbar">
    <div class="navbar-left">
      <img src="images/logo.png" alt="Logo" class="logo">
      <span class="brand"><span class="seat">Seat</span><span class="scout">Scout</span></span>
      <div class="search-box">
        <input type="text" placeholder="Search events">
      </div>
    </div>

    <ul class="navbar-links">
      <li><a href="#">Explore</a></li>
      <li><a href="#">Favorites</a></li>
      <li><a href="#">My Cart</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#" class="login">LOGIN/REGISTER</a></li>
    </ul>
  </nav>
  <!--This is the end for navbar-->

  <!--This is the start for carousel-->

  <div class="carousel" id="carousel">
    <!-- slide 0 -->
    <div class="slide active" data-spot="30% 55%">
      <img src="images/Telor-swip.jpg" alt="Taylor Swift" />
      <div class="spotlight"></div>

      <div class="overlay">
        <h2>Taylor Swift</h2>
        <button class="btn">See Tickets</button>
        <div class="dots">
          <button class="dot active" data-index="0"></button>
          <button class="dot" data-index="1"></button>
          <button class="dot" data-index="2"></button>
          <button class="dot" data-index="3"></button>
        </div>
      </div>
    </div>

    <!-- slide 1 -->
    <div class="slide" data-spot="70% 45%">
      <img src="images/artist2.jpg" alt="Artist 2" />
      <div class="spotlight"></div>

      <div class="overlay">
        <h2>Artist 2</h2>
        <button class="btn">See Tickets</button>
        <div class="dots">
          <button class="dot" data-index="0"></button>
          <button class="dot active" data-index="1"></button>
          <button class="dot" data-index="2"></button>
          <button class="dot" data-index="3"></button>
        </div>
      </div>
    </div>

    <!-- slide 2 -->
    <div class="slide" data-spot="50% 30%">
      <img src="images/artist3.jpg" alt="Artist 3" />
      <div class="spotlight"></div>

      <div class="overlay">
        <h2>Artist 3</h2>
        <button class="btn">See Tickets</button>
        <div class="dots">
          <button class="dot" data-index="0"></button>
          <button class="dot" data-index="1"></button>
          <button class="dot active" data-index="2"></button>
          <button class="dot" data-index="3"></button>
        </div>
      </div>
    </div>

    <!-- slide 3 -->
    <div class="slide" data-spot="50% 30%">
      <img src="images/artist4.jpg" alt="Artist 4" />
      <div class="spotlight"></div>

      <div class="overlay">
        <h2>Artist 4</h2>
        <button class="btn">See Tickets</button>
        <div class="dots">
          <button class="dot" data-index="0"></button>
          <button class="dot" data-index="1"></button>
          <button class="dot" data-index="2"></button>
          <button class="dot active" data-index="3"></button>
        </div>
      </div>
    </div>
  </div>

  <section class="event-info">
    <div class="info-top">
      <strong>
      <a href="#" class="browse">Browse Events</a>
      </strong>
    </div>

    <h1 class="location">Manila, PH</h1>

    <div class="buttons">
      <button class="action-btn">Change Location</button>
      <button class="action-btn">Filter by date</button>
    </div>
  </section>

  <!--This is the end for carousel-->

</body>
  <script>
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

    //this is the start for carousel

    /* Carousel + spotlight logic */
    const slides = Array.from(document.querySelectorAll('.slide'));
    const carousel = document.getElementById('carousel');
    let index = 0;
    let timer = null;
    const AUTOPLAY_MS = 5000;

    // read spotlight coordinate stored in data-spot on slide (e.g. "30% 55%")
    function setSpotForSlide(slide) {
      const spotlight = slide.querySelector('.spotlight');
      const coords = slide.dataset.spot || '50% 50%';
      // set CSS vars on the spotlight element so the background radial-gradient uses them
      spotlight.style.setProperty('--spot-x', coords.split(' ')[0]);
      spotlight.style.setProperty('--spot-y', coords.split(' ')[1]);
      // also set a little extra accent by toggling a CSS transition via reflow
      spotlight.style.opacity = 0.999; // trigger composite change (no visible change)
    }

    function updateActiveSlide(newIndex) {
      // clamp
      newIndex = ((newIndex % slides.length) + slides.length) % slides.length;
      // remove active classes
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === newIndex);
        // update overlay dots inside each slide so the correct one is marked active
        const dotButtons = s.querySelectorAll('.dot');
        dotButtons.forEach(btn => btn.classList.remove('active'));
        // mark the one that matches newIndex if there are the same number of dots as slides
        const toActivate = s.querySelector(`.dot[data-index="${newIndex}"]`);
        if (toActivate) toActivate.classList.add('active');
      });

      // set spotlight coordinates for the newly active slide
      setSpotForSlide(slides[newIndex]);

      index = newIndex;
    }

// Make the dots clickable so you can switch slides by clicking them.
// The code also makes sure the dots will still work even if they belong to a slide that’s not currently showing.

    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
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
      if (timer) { clearInterval(timer); timer = null; }
    }

    // initialize spot for the starting slide, and start autoplay
    setSpotForSlide(slides[index]);
    startAutoplay();

    // optional: pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    //this is the end for carousel
  </script>
</html>
