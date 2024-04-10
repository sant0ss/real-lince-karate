function setupSwiper(selector) {
    let swiperInstances = {};

    function initSwiper(container) {
        if (!container.classList.contains('swiper-container-initialized')) {
            container.classList.add('swiper-container');
            const wrapper = document.createElement('div');
            wrapper.classList.add('swiper-wrapper');

            const slides = Array.from(container.children);
            slides.forEach(slide => {
                slide.classList.add('swiper-slide');
                wrapper.appendChild(slide);
            });

            container.innerHTML = '';
            container.appendChild(wrapper);

            const pagination = document.createElement('div');
            pagination.classList.add('swiper-pagination');
            container.appendChild(pagination);

            swiperInstances[selector] = new Swiper(container, {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            container.classList.add('swiper-container-initialized');
        }
    }

    function destroySwiper(container) {
        if (swiperInstances[selector] && typeof swiperInstances[selector].destroy === 'function') {
            swiperInstances[selector].destroy(true, true);
            swiperInstances[selector] = null;

            container.classList.remove('swiper-container', 'swiper-container-initialized');
            const wrapper = container.querySelector('.swiper-wrapper');
            Array.from(wrapper.childNodes).forEach(slide => {
                slide.classList.remove('swiper-slide');
                container.appendChild(slide);
            });
            wrapper.remove();
            container.querySelector('.swiper-pagination').remove();
        }
    }

    function onResize() {
        const container = document.querySelector(selector);
        if (!container) return;

        if (window.innerWidth <= 1024 && !container.classList.contains('swiper-container-initialized')) {
            initSwiper(container);
        } else if (window.innerWidth > 1024 && container.classList.contains('swiper-container-initialized')) {
            destroySwiper(container);
        }
    }

    window.addEventListener('load', onResize);
    window.addEventListener('resize', onResize);
}

setupSwiper('.customer_slide > .e-con-inner');


let swiperEvent;
let swiperReview;

function setupSwiperEvent() {
    const container = document.querySelector('.event-home .elementor-shortcode .container-events-group');
    if (!container) return;

    const slides = Array.from(container.children);

    if (!container.classList.contains('swiper-container')) {
        container.classList.add('swiper-container');
        const wrapper = document.createElement('div');
        wrapper.classList.add('swiper-wrapper');

        slides.forEach(slide => {
            slide.classList.add('swiper-slide');
            wrapper.appendChild(slide);
        });

        container.innerHTML = '';
        container.appendChild(wrapper);

        const pagination = document.createElement('div');
        pagination.classList.add('swiper-pagination');
        container.appendChild(pagination);

        swiperEvent = new Swiper(container, {
            loop: true,
            spaceBetween: 80,
            pagination: {
                el: pagination,
                clickable: true,
            },
        });
    }
}

function setupSwiperReview() {
    const container = document.querySelector('.slide_projects > .e-con-inner');
    if (!container) return;

    const slides = Array.from(container.children);

    if (!container.classList.contains('swiper-container')) {
        container.classList.add('swiper-container');
        const wrapper = document.createElement('div');
        wrapper.classList.add('swiper-wrapper');

        slides.forEach(slide => {
            slide.classList.add('swiper-slide');
            wrapper.appendChild(slide);
        });

        container.innerHTML = '';
        container.appendChild(wrapper);

        const pagination = document.createElement('div');
        pagination.classList.add('swiper-pagination');
        container.appendChild(pagination);

        swiperReview = new Swiper(container, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            pagination: {
                el: pagination,
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
            },
        });
    }
}

window.addEventListener('load', () => {
    setupSwiperEvent();
    setupSwiperReview();
});

window.addEventListener('resize', () => {

    setupSwiperEvent();
    setupSwiperReview();
});


function inputEffect(selected) {
    const inputs = document.querySelectorAll(selected);

    function focusFunc() {
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach(input => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
};

inputEffect("p input.wpcf7-form-control")
inputEffect("p textarea.wpcf7-form-control")