document.addEventListener('DOMContentLoaded', function () {
	// Mobile menu toggle
	// Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle-btn');
    const navLinks = document.querySelector('.navbar-links');

    // Check if any subcategory is active on page load
    const activeSubcategory = document.querySelector('.navbar-links .nav-dropdown-menu a.active');
    if (activeSubcategory && window.innerWidth <= 926) {
        const dropdown = activeSubcategory.closest('.nav-dropdown');
        dropdown.classList.add('active');
    }

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // If reopening, restore any active dropdowns
        if (navLinks.classList.contains('active')) {
            const activeSub = document.querySelector('.navbar-links .nav-dropdown-menu a.active');
            if (activeSub) {
                activeSub.closest('.nav-dropdown').classList.add('active');
            }
        }
    });

    // Improved dropdown handling
    const dropdownToggles = document.querySelectorAll('.nav-dropdown > a');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 926) { // Mobile only
                e.preventDefault();
                e.stopPropagation();
                
                const dropdown = this.parentElement;
                const isActive = dropdown.classList.contains('active');
                
                // Close all other dropdowns first
                document.querySelectorAll('.nav-dropdown.active').forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking on a regular link (not dropdown)
    const navLinkItems = document.querySelectorAll('.navbar-links a:not(.nav-dropdown > a)');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 926) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Don't close dropdowns if a subcategory is active
                if (!link.classList.contains('active')) {
                    document.querySelectorAll('.nav-dropdown.active').forEach(d => {
                        d.classList.remove('active');
                    });
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 926 && navLinks.classList.contains('active')) {
            if (!e.target.closest('.navbar-links') && !e.target.closest('.nav-toggle-btn')) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Only close dropdowns if not clicking an active subcategory
                if (!e.target.closest('.nav-dropdown-menu a.active')) {
                    document.querySelectorAll('.nav-dropdown.active').forEach(d => {
                        d.classList.remove('active');
                    });
                }
            }
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
	// Welcome text animation
	const welcomeText = document.querySelector('.welcome-text');
	if (welcomeText) {
		welcomeText.style.opacity = '0';
		welcomeText.style.transform = 'translateY(20px)';
	}
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
		
		// Add click handler to initial category cards
		card.addEventListener('click', function() {
			const categoryId = this.dataset.id || this.dataset.category;
			if (categoryId) {
				// Navigate to furniture page with category filter
				window.location.href = `/furnitures/?category=${categoryId}`;
			}
		});
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
	
	if (!sectionTitle || !sectionDescription || !categoryGrid) return;
	
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

		// Re-initialize background images for new cards (without intervals - static images only)
		// Only set initial images, don't start intervals for category switching
		const cardImages = {
			'sectional-sofas': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'leather-sofas': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'fabric-sofas': ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'],
			'vanity-units': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'shower-systems': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'bathroom-accessories': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'coffee-tables': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'tv-units': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'armchairs': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'crystal-chandeliers': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'modern-chandeliers': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'vintage-chandeliers': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'bed-frames': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'wardrobes': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'nightstands': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'table-lamps': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'floor-lamps': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'],
			'pendant-lights': ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80']
		};
		
		// Set static images only (no intervals)
		document.querySelectorAll('.category-card').forEach(card => {
			const cardId = card.dataset.id;
			const images = cardImages[cardId];
			const bg1 = card.querySelector('.bg1');
			if (images && bg1) {
				bg1.style.backgroundImage = `url('${images[0]}')`;
				bg1.classList.add('show');
			}
			
			// Add click handler to category cards
			const cardElement = card;
			cardElement.addEventListener('click', function() {
				const categoryId = this.dataset.id || this.dataset.category;
				// Navigate to furniture page with category filter or handle click
				if (categoryId) {
					// You can customize this navigation
					window.location.href = `/furnitures/?category=${categoryId}`;
				}
			});
		});
		}, 50);

		// Clean up animation classes after transition
		setTimeout(() => {
			headerSection.classList.remove('section-fade-in');
			categoryGrid.classList.remove('card-fade-in');
		}, 600);

	}, 400); // Wait for fade out duration
}

// Add click event listeners to navigation items
function setupFurnItemListeners() {
	document.querySelectorAll('.furn-item').forEach(item => {
		// Remove existing listeners by cloning
		const newItem = item.cloneNode(true);
		item.parentNode.replaceChild(newItem, item);
		
		newItem.addEventListener('click', function () {
			// Remove active class from all items
			document.querySelectorAll('.furn-item').forEach(i => i.classList.remove('active'));

			// Add active class to clicked item
			this.classList.add('active');

			// Get category from data attribute
			const category = this.dataset.category;

			// Update content
			if (category) {
				updateContent(category);
			}
		});
	});
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
	changeBackgroundImages();
	setupFurnItemListeners();
	
	const defaultFurnItem = document.querySelector('.furn-item[data-category="sofas"]');
	if (defaultFurnItem) {
		defaultFurnItem.classList.add("active");
		updateContent("sofas");
	}
});

// Load More Button functionality
let loadedOnce = false;
let furnitureData = [];
let initialFurnitureCount = 4; // Number of items shown initially

document.addEventListener('DOMContentLoaded', function() {
	// Load furniture data from homepage.json
	async function loadFurnitureData() {
		try {
			const response = await fetch('/_data/homepage.json');
			if (response.ok) {
				const data = await response.json();
				furnitureData = data.furnitureSection?.furniture || [];
			}
		} catch (error) {
			console.error('Error loading furniture data:', error);
		}
	}

	loadFurnitureData();

	const loadMoreBtn = document.getElementById("loadMoreBtn");
	if (loadMoreBtn) {
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
			// Get remaining furniture items (skip the first 4 that are already displayed)
			const remainingItems = furnitureData.slice(initialFurnitureCount);
			
			if (remainingItems.length === 0) {
				loadMoreBtn.outerHTML = `<div class="all-loaded text-center mt-2">✔ All items loaded</div>`;
				loadedOnce = true;
				return;
			}

			let newProducts = '';
			remainingItems.forEach((item) => {
				const saleBadge = item.onSale ? '<div class="homepage-furniture-sale-badge">SALE!</div>' : '';
				newProducts += `
					<div class="col-lg-3 col-md-3 col-6">
						<div class="card product-card h-100">
							${saleBadge}
							<div class="product-img-container">
								<img src="${item.defaultImage || ''}" class="product-img default-img" alt="${item.title || ''}" />
								${item.hoverImage ? `<img src="${item.hoverImage}" class="product-img hover-img" alt="${item.title || ''} Hover" />` : ''}
							</div>
							<div class="card-body">
								<h6 class="card-title">${item.title || ''}</h6>
								<p class="card-text text-muted">${item.price || ''}</p>
							</div>
						</div>
					</div>
				`;
			});

			const productList = document.getElementById("product-list");
			if (productList) {
				productList.insertAdjacentHTML("beforeend", newProducts);
			}

			loadMoreBtn.outerHTML = `<div class="all-loaded text-center mt-2">✔ All items loaded</div>`;
			loadedOnce = true;
		}, 2000);
		});
	}

	// Slider functionality
	const sliderContainer = document.getElementById('sliderContainer');
	const handle = document.getElementById('sliderHandle');
	const afterImage = document.getElementById('afterImg');
	const beforeImage = document.getElementById('beforeImg');
	const labelBefore = document.querySelector('.label.before');
	const labelAfter = document.querySelector('.label.after');

	if (sliderContainer && handle && afterImage && beforeImage) {
		let isDragging = false;

		const updateSlider = (clientX) => {
			const rect = sliderContainer.getBoundingClientRect();
			let offsetX = clientX - rect.left;
			offsetX = Math.max(0, Math.min(offsetX, rect.width));
			const percent = (offsetX / rect.width) * 100;

			handle.style.left = `${percent}%`;
			afterImage.style.clipPath = `polygon(${percent}% 0%, 100% 0%, 100% 100%, ${percent}% 100%)`;

			if (labelBefore) labelBefore.style.opacity = percent < 15 ? '0' : '1';
			if (labelAfter) labelAfter.style.opacity = percent > 85 ? '0' : '1';
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
	}
});

const imageMap = {
	// Default images (fallback if JSON not loaded)
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

// Load project images from homepage.json
async function loadProjectImages() {
	try {
		const response = await fetch('/_data/homepage.json');
		if (response.ok) {
			const data = await response.json();
			if (data.projectsSection?.projectTypes) {
				// Merge JSON data with default imageMap
				Object.keys(data.projectsSection.projectTypes).forEach(type => {
					if (imageMap[type]) {
						imageMap[type] = {
							before: data.projectsSection.projectTypes[type].before || imageMap[type].before,
							after: data.projectsSection.projectTypes[type].after || imageMap[type].after
						};
					}
				});
			}
		}
	} catch (error) {
		console.error('Error loading project images:', error);
	}
}


function toggleDropdown() {
	const nav = document.getElementById('navBar');
	if (nav) {
		nav.classList.toggle('show');
	}
}

// Handle button clicks for package cards
function handleButtonClick(button) {
	const buttonText = button.textContent.trim();
	const card = button.closest('.custom-card');
	const cardTitle = card ? card.querySelector('.custom-card-title')?.textContent : '';
	
	if (buttonText === 'Enquire Now') {
		// Handle enquiry - you can customize this
		const message = `I'm interested in: ${cardTitle}`;
		const whatsappNumber = '971501234567'; // Replace with your WhatsApp number
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	} else if (buttonText === 'View More') {
		// Handle view more - you can customize this
		// For now, just log or navigate to a detail page
		console.log('View more for:', cardTitle);
		// window.location.href = `/packages/${cardTitle.toLowerCase().replace(/\s+/g, '-')}`;
	}
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

// Navigation items for projects section
document.addEventListener('DOMContentLoaded', async function() {
	// Load project images first
	await loadProjectImages();
	
	const navItems = document.querySelectorAll('.nav-item');
	const beforeImage = document.getElementById('beforeImg');
	const afterImage = document.getElementById('afterImg');
	const handle = document.getElementById('sliderHandle');
	const labelBefore = document.querySelector('.label.before');
	const labelAfter = document.querySelector('.label.after');
	
	if (navItems.length > 0 && beforeImage && afterImage && handle) {
		navItems.forEach(btn => {
			btn.addEventListener('click', () => {
				document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
				btn.classList.add('active');

				const label = btn.textContent.trim();
				const activeLabel = document.getElementById('activeLabel');
				if (activeLabel) {
					activeLabel.textContent = label.toUpperCase();
				}

				const images = imageMap[label];
				if (images) {
					beforeImage.src = images.before;
					afterImage.src = images.after;

					handle.style.left = `50%`;
					afterImage.style.clipPath = `polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)`;
					if (labelBefore) labelBefore.style.opacity = '1';
					if (labelAfter) labelAfter.style.opacity = '1';
				}

				if (window.innerWidth <= 768) {
					const navBar = document.getElementById('navBar');
					if (navBar) {
						navBar.classList.remove('show');
					}
				}
			});
		});
	}
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

