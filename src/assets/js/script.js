document.addEventListener('DOMContentLoaded', function () {
	// Mobile menu toggle
	const navToggle = document.querySelector('.nav-toggle-btn');
	const navLinks = document.querySelector('.navbar-links');

	navToggle.addEventListener('click', function () {
		navToggle.classList.toggle('active');
		navLinks.classList.toggle('active');
	});

	// Close mobile menu when clicking on a link
	const navLinkItems = document.querySelectorAll('.navbar-links a');
	navLinkItems.forEach(link => {
		link.addEventListener('click', () => {
			navToggle.classList.remove('active');
			navLinks.classList.remove('active');
		});
	});

	// Navbar scroll effect
	const navbar = document.querySelector('.custom-navbar');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});

	// Welcome text animation
	const welcomeText = document.querySelector('.welcome-text');
	welcomeText.style.opacity = '0';
	welcomeText.style.transform = 'translateY(20px)';
	welcomeText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

	setTimeout(() => {
		welcomeText.style.opacity = '1';
		welcomeText.style.transform = 'translateY(0)';
	}, 300);

	// Social buttons animation
	const socialBtns = document.querySelectorAll('.social-btn');
	socialBtns.forEach((btn, index) => {
		btn.style.opacity = '0';
		btn.style.transform = 'translateY(20px)';
		btn.style.transition = `opacity 0.5s ease ${0.1 * index}s, transform 0.5s ease ${0.1 * index}s`;

		setTimeout(() => {
			btn.style.opacity = '1';
			btn.style.transform = 'translateY(0)';
		}, 500 + (index * 100));
	});
});

function preloadCategoryImages(categoryImages) {
	for (const category in categoryImages) {
		categoryImages[category].forEach(src => {
			const img = new Image();
			img.src = src;
		});
	}
}

function changeBackgroundImages() {
	const cardImages = {
    'sectional-sofas': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'leather-sofas': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'fabric-sofas': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'vanity-units': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'shower-systems': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'bathroom-accessories': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'coffee-tables': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'tv-units': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'armchairs': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'crystal-chandeliers': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'modern-chandeliers': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'vintage-chandeliers': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'bed-frames': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'wardrobes': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'nightstands': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'table-lamps': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'floor-lamps': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    'pendant-lights': [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ]
};


	preloadCategoryImages(cardImages);

	const observers = new Map();

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const card = entry.target;
			const cardId = card.dataset.id;
			const images = cardImages[cardId];
			const bg1 = card.querySelector('.bg1');
			const bg2 = card.querySelector('.bg2');

			if (!images || !bg1 || !bg2) return;

			if (entry.isIntersecting) {
				if (observers.has(card)) return;

				let currentIndex = 0;
				let showingFirst = true;

				bg1.style.backgroundImage = `url('${images[currentIndex]}')`;
				bg1.classList.add('show');

				const interval = setInterval(() => {
					currentIndex = (currentIndex + 1) % images.length;
					const nextImage = `url('${images[currentIndex]}')`;

					if (showingFirst) {
						bg2.style.backgroundImage = nextImage;
						bg2.classList.add('show');
						bg1.classList.remove('show');
					} else {
						bg1.style.backgroundImage = nextImage;
						bg1.classList.add('show');
						bg2.classList.remove('show');
					}

					showingFirst = !showingFirst;
				}, 5000);

				observers.set(card, interval);
			} else {
				if (observers.has(card)) {
					clearInterval(observers.get(card));
					observers.delete(card);
				}
			}
		});
	}, { threshold: 0.1 });

	document.querySelectorAll('.category-card').forEach(card => {
		observer.observe(card);
	});
}

const categoryContent = {
	sofas: {
		title: "Sofas Collection",
		description: "Discover our premium sofa collection featuring contemporary designs and luxurious comfort.",
		cards: [
			{
				id: "sectional-sofas",  // <-- ADD THIS
				title: "Sectional Sofas",
				subtitle: "Perfect for large living spaces with modular design",
				category: "sofas"
			},
			{
				title: "Leather Sofas",
				subtitle: "Premium leather craftsmanship for timeless elegance",
				category: "sofas"
			},
			{
				title: "Fabric Sofas",
				subtitle: "Comfortable and stylish fabric options in various colors",
				category: "sofas"
			}
		]
	},
	bathroom: {
		title: "Bathroom Essentials",
		description: "Transform your bathroom with our modern fixtures and elegant accessories.",
		cards: [
			{
				title: "Vanity Units",
				subtitle: "Stylish storage solutions for your bathroom",
				category: "bathroom"
			},
			{
				title: "Shower Systems",
				subtitle: "Luxurious shower experiences with modern technology",
				category: "bathroom"
			},
			{
				title: "Bathroom Accessories",
				subtitle: "Complete your bathroom with premium accessories",
				category: "bathroom"
			}
		]
	},
	living: {
		title: "Living Room Furniture",
		description: "Create the perfect living space with our curated collection of modern furniture.",
		cards: [
			{
				title: "Coffee Tables",
				subtitle: "Centerpiece furniture for your living room",
				category: "living"
			},
			{
				title: "TV Units",
				subtitle: "Stylish entertainment centers for modern homes",
				category: "living"
			},
			{
				title: "Armchairs",
				subtitle: "Comfortable seating with contemporary design",
				category: "living"
			}
		]
	},
	chandelier: {
		title: "Chandelier Collection",
		description: "Illuminate your space with our stunning chandelier designs for every room.",
		cards: [
			{
				title: "Crystal Chandeliers",
				subtitle: "Elegant crystal designs for formal dining rooms",
				category: "chandelier"
			},
			{
				title: "Modern Chandeliers",
				subtitle: "Contemporary lighting solutions for modern spaces",
				category: "chandelier"
			},
			{
				title: "Vintage Chandeliers",
				subtitle: "Classic designs with timeless appeal",
				category: "chandelier"
			}
		]
	},
	bedroom: {
		title: "Bedroom Furniture",
		description: "Create your dream bedroom with our comfortable and stylish furniture collection.",
		cards: [
			{
				title: "Bed Frames",
				subtitle: "Comfortable and stylish beds for restful sleep",
				category: "bedroom"
			},
			{
				title: "Wardrobes",
				subtitle: "Spacious storage solutions for your clothes",
				category: "bedroom"
			},
			{
				title: "Nightstands",
				subtitle: "Convenient bedside storage with modern design",
				category: "bedroom"
			}
		]
	},
	lamps: {
		title: "Lighting Collection",
		description: "Brighten your home with our diverse range of lamps and lighting solutions.",
		cards: [
			{
				title: "Table Lamps",
				subtitle: "Perfect accent lighting for any room",
				category: "lamps"
			},
			{
				title: "Floor Lamps",
				subtitle: "Statement lighting pieces for modern interiors",
				category: "lamps"
			},
			{
				title: "Pendant Lights",
				subtitle: "Stylish hanging lights for kitchen and dining",
				category: "lamps"
			}
		]
	}
};

// Function to update content with enhanced fade animations
function updateContent(category) {
	const content = categoryContent[category];
	if (!content) return;

	// Get elements
	const sectionTitle = document.getElementById('section-title');
	const sectionDescription = document.getElementById('section-description');
	const categoryGrid = document.getElementById('category-grid');
	const headerSection = sectionTitle.closest('.header-padding');

	// Start fade out animations
	headerSection.classList.add('section-fade-out');
	categoryGrid.classList.add('card-fade-out');

	// Wait for fade out to complete
	setTimeout(() => {
		// Update header text
		sectionTitle.textContent = content.title;
		sectionDescription.textContent = content.description;

		// Update cards
		let cardHTML = '';
		content.cards.forEach((card, index) => {
			const colClass = index === 0 ? 'col-lg-6 col-md-12 col-12' : 'col-lg-3 col-md-6 col-sm-6 col-12';
			cardHTML += `
                        <div class="${colClass}">
            				<div class="category-card" data-category="${card.category}" data-id="${card.id || card.title.replace(/\s+/g, '-').toLowerCase()}">
                                <div class="bg-layer bg1"></div>
                                <div class="bg-layer bg2"></div>
                                <div class="category-content">
                                    <h2 class="category-title">${card.title}</h2>
                                    <p class="category-subtitle">${card.subtitle}</p>
                                    <div class="arrow-btn">
                                        <span>›</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
		});

		categoryGrid.innerHTML = cardHTML;

		// Remove fade out classes and add fade in classes
		headerSection.classList.remove('section-fade-out');
		categoryGrid.classList.remove('card-fade-out');

		// Trigger fade in animations
		setTimeout(() => {
			headerSection.classList.add('section-fade-in');
			categoryGrid.classList.add('card-fade-in');

			// Re-initialize background images for new cards
			changeBackgroundImages();
		}, 50);

		// Clean up animation classes after transition
		setTimeout(() => {
			headerSection.classList.remove('section-fade-in');
			categoryGrid.classList.remove('card-fade-in');
		}, 600);

	}, 400); // Wait for fade out duration
}

// Add click event listeners to navigation items
document.querySelectorAll('.furn-item').forEach(item => {
	item.addEventListener('click', function () {
		// Remove active class from all items
		document.querySelectorAll('.furn-item').forEach(i => i.classList.remove('active'));

		// Add active class to clicked item
		this.classList.add('active');

		// Get category from data attribute
		const category = this.dataset.category;

		// Update content
		updateContent(category);
	});
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
	changeBackgroundImages();
	updateContent("sofas");
	document.querySelector('.furn-item[data-category="sofas"]').classList.add("active");
});

const loadMoreBtn = document.getElementById("loadMoreBtn");
const productList = document.getElementById("product-list");

let loadedOnce = false;

// Initial setup
loadMoreBtn.addEventListener("click", () => {
	if (loadedOnce) return;

	loadMoreBtn.disabled = true;
	loadMoreBtn.innerHTML = `
      <span class="loading-spinner">
        Loading
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </span>
    `;

	setTimeout(() => {
		const newProducts = `
        <div class="col-lg-3 col-md-3 col-6">
          <div class="card product-card h-100">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"   data-alt="/assets/img/furniture1.jpg"  class="card-img-top product-img" alt="Office Chair"/>
            <div class="card-body">
              <h6 class="card-title">Office Chair</h6>
              <p class="card-text text-muted">$30.00</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6">
          <div class="card product-card h-100">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" class="card-img-top product-img" alt="Dining Table"/>
            <div class="card-body">
              <h6 class="card-title">Dining Table</h6>
              <p class="card-text text-muted">$120.00</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6">
          <div class="card product-card h-100">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" class="card-img-top product-img" alt="Rocking Chair"/>
            <div class="card-body">
              <h6 class="card-title">Rocking Chair</h6>
              <p class="card-text text-muted">$85.00</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6">
          <div class="card product-card h-100">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" class="card-img-top product-img" alt="Coffee Table"/>
            <div class="card-body">
              <h6 class="card-title">Coffee Table</h6>
              <p class="card-text text-muted">$40.00</p>
            </div>
          </div>
        </div>
      `;

		productList.insertAdjacentHTML("beforeend", newProducts);

		loadMoreBtn.outerHTML = `<div class="all-loaded text-center mt-2">✔ All items loaded</div>`;
		loadedOnce = true;
	}, 2000);
});

const sliderContainer = document.getElementById('sliderContainer');
const handle = document.getElementById('sliderHandle');
const afterImage = document.getElementById('afterImg');
const beforeImage = document.getElementById('beforeImg');
const labelBefore = document.querySelector('.label.before');
const labelAfter = document.querySelector('.label.after');

let isDragging = false;

const updateSlider = (clientX) => {
	const rect = sliderContainer.getBoundingClientRect();
	let offsetX = clientX - rect.left;
	offsetX = Math.max(0, Math.min(offsetX, rect.width));
	const percent = (offsetX / rect.width) * 100;

	handle.style.left = `${percent}%`;
	afterImage.style.clipPath = `polygon(${percent}% 0%, 100% 0%, 100% 100%, ${percent}% 100%)`;

	labelBefore.style.opacity = percent < 15 ? '0' : '1';
	labelAfter.style.opacity = percent > 85 ? '0' : '1';
};

handle.addEventListener('mousedown', (e) => {
	isDragging = true;
	document.body.classList.add('dragging');
	e.preventDefault();
});

document.addEventListener('mouseup', () => {
	if (isDragging) {
		isDragging = false;
		document.body.classList.remove('dragging');
	}
});

document.addEventListener('mousemove', (e) => {
	if (isDragging) {
		updateSlider(e.clientX);
	}
});

handle.addEventListener('touchstart', (e) => {
	isDragging = true;
	document.body.classList.add('dragging');
	e.preventDefault();
});

document.addEventListener('touchend', () => {
	if (isDragging) {
		isDragging = false;
		document.body.classList.remove('dragging');
	}
});

document.addEventListener('touchmove', (e) => {
	if (isDragging) {
		updateSlider(e.touches[0].clientX);
		e.preventDefault();
	}
});

const imageMap = {
	'Residential': {
		before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
		after: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
	},
	'Commercial': {
		before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
		after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
	},
	'Lighting Design': {
		before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
		after: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600&fit=crop',
	},
	'Art Deco': {
		before: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=800&h=600&fit=crop',
		after: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop',
	}
};

function toggleDropdown() {
	const nav = document.getElementById('navBar');
	const caret = document.getElementById('caret');
	nav.classList.toggle('show');
}

function handleResize() {
	const nav = document.getElementById('navBar');
	if (window.innerWidth > 768) {
		nav.classList.add('show');
	} else {
		nav.classList.remove('show');
	}
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

document.querySelectorAll('.nav-item').forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
		btn.classList.add('active');

		const label = btn.textContent.trim();
		document.getElementById('activeLabel').textContent = label.toUpperCase();

		const images = imageMap[label];
		if (images) {
			beforeImage.src = images.before;
			afterImage.src = images.after;

			handle.style.left = `50%`;
			afterImage.style.clipPath = `polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)`;
			labelBefore.style.opacity = '1';
			labelAfter.style.opacity = '1';
		}

		if (window.innerWidth <= 768) {
			document.getElementById('navBar').classList.remove('show');
		}
	});
});

const fakeReviews = [
	{
		author_name: "John Doe",
		profile_photo_url: "https://randomuser.me/api/portraits/men/32.jpg",
		rating: 5,
		time: Math.floor(Date.now() / 1000),
		text: "Fantastic service! Really appreciated the hospitality and professionalism."
	},
	{
		author_name: "Jane Smith",
		profile_photo_url: "https://randomuser.me/api/portraits/women/44.jpg",
		rating: 4,
		time: Math.floor(Date.now() / 1000) - 86400,
		text: "Helpful staff and a clean environment. Would definitely recommend."
	},
	{
		author_name: "David Lee",
		profile_photo_url: "https://randomuser.me/api/portraits/men/61.jpg",
		rating: 3,
		time: Math.floor(Date.now() / 1000) - 172800,
		text: "Decent experience, though the wait time could have been shorter."
	},
	{
		author_name: "Alice Brown",
		profile_photo_url: "https://randomuser.me/api/portraits/women/67.jpg",
		rating: 5,
		time: Math.floor(Date.now() / 1000) - 259200,
		text: "Absolutely loved the ambiance and the team was super professional."
	},
	{
		author_name: "Mark Wilson",
		profile_photo_url: "https://randomuser.me/api/portraits/men/55.jpg",
		rating: 4,
		time: Math.floor(Date.now() / 1000) - 345600,
		text: "Clean, fast, and friendly. Had a great experience overall!"
	},
	{
		author_name: "Sophie Turner",
		profile_photo_url: "https://randomuser.me/api/portraits/women/52.jpg",
		rating: 5,
		time: Math.floor(Date.now() / 1000) - 432000,
		text: "The best place I've visited this year. Amazing people and amazing service!"
	}
];

function generateStars(rating) {
	return '<i class="fas fa-star"></i>'.repeat(rating) +
		'<i class="far fa-star"></i>'.repeat(5 - rating);
}

function loadReviews() {
	const wrapper = document.getElementById("swiper-wrapper");
	wrapper.innerHTML = ""; // Clear existing slides if any

	fakeReviews.forEach(review => {
		const slide = document.createElement("div");
		slide.className = "swiper-slide";

		slide.innerHTML = `
      <div class="review-card">
        <div class="d-flex align-items-center mb-2">
          <img src="${review.profile_photo_url}" class="review-avatar" alt="${review.author_name}">
          <div>
            <strong>${review.author_name}</strong><br>
            <small>${new Date(review.time * 1000).toLocaleDateString()}</small>
          </div>
        </div>
        <div class="review-stars mb-2">${generateStars(review.rating)}</div>
        <p>${review.text}</p>
      </div>
    `;

		wrapper.appendChild(slide);
	});

	const swiper = new Swiper(".swiper", {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		breakpoints: {
			768: { slidesPerView: 2 },
			992: { slidesPerView: 3 }
		},
		on: {
			init: equalizeCardHeights,
			resize: equalizeCardHeights
		}
	});

	// Run once after short delay for guaranteed layout
	setTimeout(equalizeCardHeights, 100);

	function equalizeCardHeights() {
		const cards = document.querySelectorAll('.review-card');
		let maxHeight = 0;

		// Reset heights first
		cards.forEach(card => {
			card.style.height = 'auto';
		});

		// Get max height
		cards.forEach(card => {
			maxHeight = Math.max(maxHeight, card.offsetHeight);
		});

		// Apply to all
		cards.forEach(card => {
			card.style.height = maxHeight + 'px';
		});
	}
}

window.onload = loadReviews;



