document.addEventListener('DOMContentLoaded', () => {
    
    // Top Navigation Carousel (4 Sections)
    const topNavSwiper = new Swiper('.topNavSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });

    // Customer Logos Autoplay Carousel
    const customersSwiper = new Swiper('.customersSwiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 3 },
            900: { slidesPerView: 5 },
            1200: { slidesPerView: 6 }
        }
    });

    // Header scroll effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (navList.style.display === 'flex') {
                navList.style.display = 'none';
                mobileBtn.innerHTML = '<i class="ph ph-list"></i>';
            } else {
                navList.style.display = 'flex';
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '90px';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.backgroundColor = 'var(--bg-main)';
                navList.style.padding = '2rem';
                navList.style.boxShadow = 'var(--shadow-md)';
                mobileBtn.innerHTML = '<i class="ph ph-x"></i>';
            }
        });
    }
});
