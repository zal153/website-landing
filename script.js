// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopButton = document.getElementById('back-to-top');
const joinBtn = document.getElementById('join-btn');

// Mobile Menu Toggle
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuButton.querySelector('i');

    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scroll');
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.classList.remove('navbar-scroll');
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'none';
    }

    // Update nav link colors based on scroll position
    const navLinks = document.querySelectorAll('.nav-link');
    if (window.scrollY > 100) {
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-700');
        });
    } else {
        navLinks.forEach(link => {
            link.classList.remove('text-gray-700');
            link.classList.add('text-white');
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible', 'translate-y-4');
        backToTopButton.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible', 'translate-y-0');
        backToTopButton.classList.add('opacity-0', 'invisible', 'translate-y-4');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link, #mobile-menu a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-green-600', 'font-bold');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('text-green-600', 'font-bold');
        }
    });
});

// Join button click handler
joinBtn.addEventListener('click', () => {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modalOverlay.id = 'join-modal';

    // Create modal content
    modalOverlay.innerHTML = `
        <div class="bg-white rounded-lg max-w-md w-full p-6 transform transition-all duration-300 scale-95 opacity-0" id="modal-content">
            <div class="text-center mb-6">
                <i class="fas fa-users text-green-600 text-4xl mb-4"></i>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Bergabung dengan HMI</h3>
                <p class="text-gray-600">Isi formulir di bawah untuk bergabung dengan keluarga besar HMI</p>
            </div>
            
            <form id="join-form" class="space-y-4">
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                    <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200">
                </div>
                
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">NIM</label>
                    <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200">
                </div>
                
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Program Studi</label>
                    <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200">
                        <option value="">Pilih Program Studi</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Hukum">Hukum</option>
                        <option value="Pendidikan Bahasa Indonesia">Pendidikan Bahasa Indonesia</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Nomor WhatsApp</label>
                    <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200">
                </div>
                
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Alasan Bergabung</label>
                    <textarea rows="3" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 resize-none" placeholder="Ceritakan alasan Anda ingin bergabung dengan HMI..."></textarea>
                </div>
                
                <div class="flex space-x-4 pt-4">
                    <button type="button" id="close-modal" class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg font-semibold transition-colors duration-200">
                        Batal
                    </button>
                    <button type="submit" class="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                        Kirim Pendaftaran
                    </button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    // Animate modal appearance
    setTimeout(() => {
        const modalContent = document.getElementById('modal-content');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);

    // Close modal handlers
    const closeModal = () => {
        const modalContent = document.getElementById('modal-content');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            document.body.removeChild(modalOverlay);
        }, 300);
    };

    document.getElementById('close-modal').addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Form submission handler
    document.getElementById('join-form').addEventListener('submit', (e) => {
        e.preventDefault();

        // Show success message
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `
            <div class="text-center py-8">
                <i class="fas fa-check-circle text-green-600 text-6xl mb-4"></i>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Pendaftaran Berhasil!</h3>
                <p class="text-gray-600 mb-6">Terima kasih telah mendaftar. Tim HMI akan menghubungi Anda dalam 1-2 hari kerja.</p>
                <button id="close-success" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Tutup
                </button>
            </div>
        `;

        document.getElementById('close-success').addEventListener('click', closeModal);
    });
});

// Gallery image lightbox effect
document.querySelectorAll('#galeri img').forEach((img, index) => {
    img.addEventListener('click', () => {
        // Create lightbox overlay
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
        lightboxOverlay.id = 'lightbox-overlay';

        // Create lightbox content
        lightboxOverlay.innerHTML = `
            <div class="relative max-w-4xl max-h-full">
                <img src="${img.src}" alt="${img.alt}" class="max-w-full max-h-full object-contain rounded-lg">
                <button id="close-lightbox" class="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl">
                    <i class="fas fa-times"></i>
                </button>
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p class="text-lg font-semibold">${img.alt}</p>
                    <p class="text-sm opacity-75">Gambar ${index + 1} dari ${document.querySelectorAll('#galeri img').length}</p>
                </div>
            </div>
        `;

        document.body.appendChild(lightboxOverlay);

        // Close lightbox handlers
        const closeLightbox = () => {
            document.body.removeChild(lightboxOverlay);
        };

        document.getElementById('close-lightbox').addEventListener('click', closeLightbox);

        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function handleKeydown(e) {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', handleKeydown);
            }
        });
    });
});

// Form validation and submission
document.querySelector('#kontak form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Mengirim...';
    submitButton.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        successMessage.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle mr-3"></i>
                <span>Pesan berhasil dikirim! Kami akan segera merespons.</span>
            </div>
        `;

        document.body.appendChild(successMessage);

        // Animate success message
        setTimeout(() => {
            successMessage.classList.remove('translate-x-full');
        }, 10);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 300);
        }, 5000);

        // Reset form
        e.target.reset();

        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.className = 'fixed inset-0 bg-white z-50 flex items-center justify-center';
    preloader.innerHTML = `
        <div class="text-center">
            <div class="flex items-center space-x-3 mb-4">
                <img src="logo1.png" alt="Logo HMI" class="h-16 w-auto animate-pulse">
                <img src="logo2.png" alt="Logo Universitas" class="h-16 w-auto animate-pulse">
            </div>
            <div class="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>
            <p class="text-gray-600 mt-4 font-semibold">Memuat...</p>
        </div>
    `;

    document.body.insertBefore(preloader, document.body.firstChild);

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(preloader);
        }, 500);
    }, 1500);
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add initial fade-in class to hero section
    const heroContent = document.querySelector('#home .fade-in');
    setTimeout(() => {
        heroContent.classList.add('active');
    }, 2000);
});