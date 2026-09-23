const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

const collectionKey = 'the-fashion-hub-collection';

function safeReadCollection() {
  try {
    const saved = localStorage.getItem(collectionKey);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function safeWriteCollection(items) {
  try {
    localStorage.setItem(collectionKey, JSON.stringify(items));
  } catch (error) {
    // Ignore storage issues in restricted environments.
  }
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.reveal');
if (revealItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const productCards = document.querySelectorAll('[data-category]');

if (filterButtons.length && productCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

      productCards.forEach((card) => {
        const visible = selected === 'all' || card.dataset.category === selected;
        card.style.display = visible ? '' : 'none';
      });
    });
  });
}

const forms = document.querySelectorAll('.contact-form');

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('.form-message');

    if (message) {
      message.textContent = 'Thank you. Cedella will be in touch soon.';
      message.classList.add('is-visible');
    }

    form.reset();
  });
});

const fashionItems = [
  {
    id: 'tailored-luxe',
    name: 'Tailored Luxe',
    category: 'women',
    categoryLabel: "Women's Fashion",
    description: 'A sculpted update that pairs polished structure with soft movement.',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    alt: 'Tailored Luxe fashion feature'
  },
  {
    id: 'night-tailoring',
    name: 'Night Tailoring',
    category: 'men',
    categoryLabel: "Men's Fashion",
    description: 'Sharp lines with a relaxed, elevated finish for evening wear.',
    price: '$220',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    alt: 'Night Tailoring menswear item'
  },
  {
    id: 'lunar-knit',
    name: 'Lunar Knit',
    category: 'women',
    categoryLabel: "Women's Fashion",
    description: 'A tactile knit designed for warmth, shape and subtle drama.',
    price: '$130',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    alt: 'Lunar Knit outfit'
  },
  {
    id: 'atelier-dress',
    name: 'Atelier Dress',
    category: 'dresses',
    categoryLabel: 'Dresses',
    description: 'Fluid drape and rich texture in a modern statement silhouette.',
    price: '$210',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    alt: 'Atelier Dress editorial style'
  },
  {
    id: 'harbor-suit',
    name: 'Harbor Suit',
    category: 'suits',
    categoryLabel: 'Suits',
    description: 'A contemporary power suit that balances polish and ease.',
    price: '$240',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    alt: 'Harbor Suit tailored look'
  },
  {
    id: 'after-dark',
    name: 'After Dark',
    category: 'streetwear',
    categoryLabel: 'Streetwear',
    description: 'Bold layering with a relaxed fit designed for after-hours statement styling.',
    price: '$170',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    alt: 'After Dark streetwear styling'
  },
  {
    id: 'midnight-shell',
    name: 'Midnight Shell',
    category: 'jackets',
    categoryLabel: 'Jackets',
    description: 'Textural layering with a sleek silhouette that finishes any look.',
    price: '$190',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    alt: 'Midnight Shell jacket'
  },
  {
    id: 'studio-heel',
    name: 'Studio Heel',
    category: 'shoes',
    categoryLabel: 'Shoes',
    description: 'A sculptural heel designed to sharpen both day and evening styling.',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    alt: 'Studio Heel footwear'
  },
  {
    id: 'mosaic-frame',
    name: 'Mosaic Frame',
    category: 'accessories',
    categoryLabel: 'Accessories',
    description: 'The finishing detail with statement weight and light, modern lines.',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    alt: 'Mosaic Frame accessory'
  },
  {
    id: 'everyday-tote',
    name: 'Everyday Tote',
    category: 'accessories',
    categoryLabel: 'Accessories',
    description: 'A polished carry-all built for movement, utility and presence.',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    alt: 'Everyday Tote accessory'
  },
  {
    id: 'quiet-structure',
    name: 'Quiet Structure',
    category: 'men',
    categoryLabel: "Men's Fashion",
    description: 'Minimal layering and balanced proportions for complete everyday ease.',
    price: '$160',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    alt: 'Quiet Structure menswear idea'
  },
  {
    id: 'silver-run',
    name: 'Silver Run',
    category: 'shoes',
    categoryLabel: 'Shoes',
    description: 'A sleek runner with elevated finish for movement and a bold statement.',
    price: '$140',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
    alt: 'Silver Run shoe style'
  }
];

const searchInput = document.getElementById('searchInput');
const filterBar = document.getElementById('filterBar');
const fashionGrid = document.getElementById('fashionGrid');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalClose = document.getElementById('modalClose');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentFilter = 'all';
let currentSearch = '';
let currentIndex = 0;
let filteredItems = [...fashionItems];

function getVisibleItems() {
  return fashionItems.filter((item) => {
    const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
    const query = currentSearch.trim().toLowerCase();
    const matchesSearch = !query || [item.name, item.categoryLabel, item.description].some((value) => value.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });
}

function renderFashionCards() {
  if (!fashionGrid) {
    return;
  }

  filteredItems = getVisibleItems();

  if (!filteredItems.length) {
    fashionGrid.innerHTML = '<div class="feature-card reveal"><h3>No styles found</h3><p>Try another search or category filter.</p></div>';
    return;
  }

  fashionGrid.innerHTML = filteredItems.map((item, index) => `
    <article class="fashion-item reveal" data-category="${item.category}">
      <img src="${item.image}" alt="${item.alt}" data-index="${index}" data-open="${index}" />
      <div class="fashion-body">
        <div class="fashion-category">${item.categoryLabel}</div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="fashion-meta">
          <span class="fashion-price">${item.price}</span>
        </div>
        <div class="fashion-actions">
          <button class="btn btn-secondary" type="button" data-open="${index}">View Details</button>
          <button class="btn btn-primary" type="button" data-save="${item.id}">Add to Collection</button>
        </div>
      </div>
    </article>
  `).join('');

  const itemButtons = fashionGrid.querySelectorAll('[data-open]');
  itemButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const itemIndex = Number(button.dataset.open);
      openModal(itemIndex);
    });
  });

  const galleryImages = fashionGrid.querySelectorAll('img[data-index]');
  galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
      const itemIndex = Number(img.dataset.index);
      openModal(itemIndex);
    });
  });

  const saveButtons = fashionGrid.querySelectorAll('[data-save]');
  saveButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const saved = safeReadCollection();
      const id = button.dataset.save;
      if (!saved.includes(id)) {
        saved.push(id);
        safeWriteCollection(saved);
        button.textContent = 'Saved';
        button.disabled = true;
      }
    });
  });
}

function openModal(index) {
  if (!modal || !filteredItems.length) {
    return;
  }

  currentIndex = index;
  const item = filteredItems[index];
  if (!item) {
    return;
  }

  modalImage.src = item.image;
  modalImage.alt = item.alt;
  modalTitle.textContent = item.name;
  modalCategory.textContent = item.categoryLabel;
  modalDescription.textContent = item.description;
  modalPrice.textContent = item.price;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

if (filterBar) {
  filterBar.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter || 'all';
      filterBar.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.toggle('is-active', btn === button));
      renderFashionCards();
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    currentSearch = event.target.value;
    renderFashionCards();
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (!filteredItems.length) {
      return;
    }
    currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    openModal(currentIndex);
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (!filteredItems.length) {
      return;
    }
    currentIndex = (currentIndex + 1) % filteredItems.length;
    openModal(currentIndex);
  });
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.close === 'true') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

if (fashionGrid) {
  renderFashionCards();
}

function initHomepageMotion() {
  const homePage = document.querySelector('.home-page');
  const canvas = document.getElementById('threeCanvas');

  if (!homePage) {
    return;
  }

  const slideSections = document.querySelectorAll('.home-slide');
  const tiltCards = document.querySelectorAll('.tilt-card');
  const parallaxImages = document.querySelectorAll('.home-page .story-photo img, .home-page .product-card img');
  let pointerX = 0;
  let pointerY = 0;
  let targetScroll = window.scrollY;

  document.addEventListener('pointermove', (event) => {
    pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
    pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  tiltCards.forEach((card) => {
    const strength = Number(card.dataset.tiltStrength) || 14;

    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -strength}deg) rotateY(${x * strength}deg) translateZ(14px)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  const updateParallax = () => {
    targetScroll = window.scrollY;
    parallaxImages.forEach((image) => {
      const bounds = image.parentElement.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * 0.035;
      image.style.transform = `translate3d(0, ${Math.max(-18, Math.min(18, offset))}px, 0) scale(1.04)`;
    });
  };

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();

  if ('IntersectionObserver' in window) {
    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-slide-near', entry.isIntersecting);
        entry.target.classList.toggle('is-slide-away', !entry.isIntersecting);
      });
    }, { threshold: 0.2 });

    slideSections.forEach((section) => slideObserver.observe(section));
  }

  document.querySelectorAll('.home-page .nav-menu a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) {
        return;
      }
      event.preventDefault();
      window.history.pushState({}, '', link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navMenu) {
        navMenu.classList.remove('is-open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  if (window.gsap) {
    window.gsap.from('.home-page .hero-copy, .home-page .hero-aside', {
      y: 35,
      rotateX: 8,
      opacity: 0,
      duration: 1.15,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.15
    });
  }

  if (!canvas || !window.THREE) {
    return;
  }

  const THREE = window.THREE;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  const particleGroup = new THREE.Group();
  const particleCount = window.innerWidth < 640 ? 650 : 1300;
  const positions = new Float32Array(particleCount * 3);

  camera.position.z = 8;
  for (let index = 0; index < particleCount; index += 1) {
    const cursor = index * 3;
    positions[cursor] = (Math.random() - 0.5) * 14;
    positions[cursor + 1] = (Math.random() - 0.5) * 9;
    positions[cursor + 2] = (Math.random() - 0.5) * 8;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xd7b279,
    size: window.innerWidth < 640 ? 0.025 : 0.04,
    transparent: true,
    opacity: 0.72,
    blending: THREE.AdditiveBlending
  });
  particleGroup.add(new THREE.Points(particleGeometry, particleMaterial));

  const ringPoints = [];
  const ringSegments = 96;
  const openAngle = Math.PI * 1.78;
  for (let index = 0; index <= ringSegments; index += 1) {
    const angle = (index / ringSegments) * openAngle - Math.PI * 0.39;
    ringPoints.push(new THREE.Vector3(Math.cos(angle) * 2.25, Math.sin(angle) * 2.25, 0));
  }
  const ringGeometry = new THREE.BufferGeometry().setFromPoints(ringPoints);
  const ringMaterial = new THREE.LineBasicMaterial({ color: 0xd7b279, transparent: true, opacity: 0.78 });
  const ring = new THREE.Line(ringGeometry, ringMaterial);
  ring.rotation.x = 0.25;
  particleGroup.add(ring);
  scene.add(particleGroup);

  const resize = () => {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const animate = (time) => {
    const seconds = time * 0.00025;
    particleGroup.rotation.y += (pointerX * 0.18 - particleGroup.rotation.y) * 0.018;
    particleGroup.rotation.x += (pointerY * -0.12 - particleGroup.rotation.x) * 0.018;
    particleGroup.position.y = Math.sin(seconds * 2) * 0.12 - Math.min(targetScroll * 0.00015, 0.55);
    ring.rotation.z = seconds * 2.4;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  window.addEventListener('resize', resize);
  resize();
  window.requestAnimationFrame(animate);
}

initHomepageMotion();

function initIntroVideo() {
  const watchButton = document.getElementById('introWatchButton');
  const modal = document.getElementById('introVideoModal');
  const modalClose = document.getElementById('introModalClose');
  const previewVideo = document.getElementById('introPreviewVideo');
  const modalVideo = document.getElementById('introModalVideo');
  const embedFrame = document.getElementById('introEmbedFrame');
  const playToggle = document.getElementById('introPlayToggle');
  const muteToggle = document.getElementById('introMuteToggle');
  const caption = document.getElementById('introCaption');
  const previewCaption = document.getElementById('introPreviewCaption');
  const timeNode = document.getElementById('introTime');

  if (!watchButton || !modal || !previewVideo || !modalVideo) {
    return;
  }

  // Set this to a YouTube or Vimeo embed URL when a hosted intro film is ready.
  const introEmbedUrl = '';
  const captions = [
    { start: 0, text: 'Explore curated luxury collections & new arrivals' },
    { start: 5, text: 'Browse our interactive fashion library and styling guides' },
    { start: 10, text: 'Get 24/7 assistance from our built-in virtual AI guide' }
  ];

  let captionTimer;
  let activeCaption = 0;

  const setCaption = (index) => {
    activeCaption = (index + captions.length) % captions.length;
    const text = captions[activeCaption].text;
    caption.textContent = text;
    previewCaption.textContent = text;
  };

  const syncCaption = (currentTime) => {
    const duration = modalVideo.duration || 15;
    const progress = (currentTime % duration) / duration;
    const index = progress >= 0.66 ? 2 : progress >= 0.33 ? 1 : 0;
    if (index !== activeCaption) {
      setCaption(index);
    }
  };

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) {
      return '00:00';
    }
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remaining = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remaining}`;
  };

  const setPlaybackLabel = () => {
    playToggle.textContent = modalVideo.paused ? 'Play' : 'Pause';
    playToggle.setAttribute('aria-label', modalVideo.paused ? 'Play intro video' : 'Pause intro video');
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalVideo.pause();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    window.clearInterval(captionTimer);
    document.body.style.overflow = '';
  };

  const openModal = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setCaption(0);

    if (introEmbedUrl && embedFrame) {
      modalVideo.hidden = true;
      embedFrame.hidden = false;
      embedFrame.src = introEmbedUrl;
      playToggle.hidden = true;
      muteToggle.hidden = true;
      timeNode.hidden = true;
      return;
    }

    modalVideo.hidden = false;
    if (embedFrame) {
      embedFrame.hidden = true;
      embedFrame.src = '';
    }
    playToggle.hidden = false;
    muteToggle.hidden = false;
    timeNode.hidden = false;
    modalVideo.currentTime = 0;
    modalVideo.muted = false;
    muteToggle.textContent = 'Sound on';
    modalVideo.play().catch(() => {
      modalVideo.muted = true;
      modalVideo.play().catch(() => {});
      muteToggle.textContent = 'Sound off';
    });
    setPlaybackLabel();
  };

  const playPreview = () => {
    previewVideo.play().catch(() => {});
  };

  watchButton.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.introClose === 'true') {
      closeModal();
    }
  });

  playToggle.addEventListener('click', () => {
    if (modalVideo.paused) {
      modalVideo.play().catch(() => {});
    } else {
      modalVideo.pause();
    }
    setPlaybackLabel();
  });

  muteToggle.addEventListener('click', () => {
    modalVideo.muted = !modalVideo.muted;
    muteToggle.textContent = modalVideo.muted ? 'Sound off' : 'Sound on';
    muteToggle.setAttribute('aria-label', modalVideo.muted ? 'Unmute intro video' : 'Mute intro video');
  });

  modalVideo.addEventListener('play', () => {
    setPlaybackLabel();
    window.clearInterval(captionTimer);
    captionTimer = window.setInterval(() => syncCaption(modalVideo.currentTime), 250);
  });
  modalVideo.addEventListener('pause', setPlaybackLabel);
  modalVideo.addEventListener('ended', setPlaybackLabel);
  modalVideo.addEventListener('timeupdate', () => {
    syncCaption(modalVideo.currentTime);
    timeNode.textContent = `${formatTime(modalVideo.currentTime)} / ${formatTime(modalVideo.duration)}`;
  });
  previewVideo.addEventListener('timeupdate', () => {
    const duration = previewVideo.duration || 15;
    const progress = (previewVideo.currentTime % duration) / duration;
    const index = progress >= 0.66 ? 2 : progress >= 0.33 ? 1 : 0;
    setCaption(index);
  });
  previewVideo.addEventListener('canplay', playPreview, { once: true });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  setCaption(0);
  playPreview();
}

initIntroVideo();

function initHeroVideoModal() {
  const modal = document.getElementById('videoModal');
  const openButton = document.getElementById('openVideoBtn');
  const closeButton = document.getElementById('closeVideoBtn');
  const video = document.getElementById('mainIntroVideo');
  const playPauseButton = document.getElementById('playPauseBtn');
  const muteToggleButton = document.getElementById('muteToggleBtn');
  const captionText = document.getElementById('captionText');
  const progressFill = document.getElementById('videoProgress');
  const ctaOverlay = document.getElementById('videoCtaOverlay');
  const pauseIcon = playPauseButton ? playPauseButton.querySelector('.icon-pause') : null;
  const playIcon = playPauseButton ? playPauseButton.querySelector('.icon-play') : null;
  const unmuteIcon = muteToggleButton ? muteToggleButton.querySelector('.icon-unmute') : null;
  const muteIcon = muteToggleButton ? muteToggleButton.querySelector('.icon-mute') : null;

  if (!modal || !openButton || !closeButton || !video || !playPauseButton || !muteToggleButton) {
    return;
  }

  const captions = [
    'Explore curated luxury collections & new arrivals',
    'Browse our interactive fashion library and styling guides',
    'Get 24/7 assistance from our built-in virtual AI guide'
  ];

  const setCaption = (index) => {
    if (!captionText) return;
    const safeIndex = Math.max(0, Math.min(index, captions.length - 1));
    captionText.textContent = captions[safeIndex];
  };

  const syncCaption = () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const progress = video.currentTime / video.duration;
    if (progress >= 0.66) {
      setCaption(2);
    } else if (progress >= 0.33) {
      setCaption(1);
    } else {
      setCaption(0);
    }
  };

  const updateProgress = () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const percent = (video.currentTime / video.duration) * 100;
    progressFill.style.width = `${percent}%`;
  };

  const updateButtonStates = () => {
    if (video.paused) {
      pauseIcon?.classList.add('hidden');
      playIcon?.classList.remove('hidden');
    } else {
      pauseIcon?.classList.remove('hidden');
      playIcon?.classList.add('hidden');
    }

    if (video.muted) {
      unmuteIcon?.classList.add('hidden');
      muteIcon?.classList.remove('hidden');
    } else {
      unmuteIcon?.classList.remove('hidden');
      muteIcon?.classList.add('hidden');
    }
  };

  const openModal = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setCaption(0);
    video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });
    updateButtonStates();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    video.pause();
    ctaOverlay?.classList.add('hidden');
  };

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('video-modal-backdrop')) {
      closeModal();
    }
  });

  playPauseButton.addEventListener('click', () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    updateButtonStates();
  });

  muteToggleButton.addEventListener('click', () => {
    video.muted = !video.muted;
    updateButtonStates();
  });

  video.addEventListener('play', () => {
    updateButtonStates();
    ctaOverlay?.classList.add('hidden');
  });

  video.addEventListener('pause', updateButtonStates);
  video.addEventListener('timeupdate', () => {
    updateProgress();
    syncCaption();
  });

  video.addEventListener('ended', () => {
    ctaOverlay?.classList.remove('hidden');
    updateButtonStates();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  setCaption(0);
  updateButtonStates();
}

initHeroVideoModal();
