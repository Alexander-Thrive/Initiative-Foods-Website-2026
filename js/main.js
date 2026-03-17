document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Swiper Carousel for Capabilities
    const swiper = new Swiper('.capabilitiesSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
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
