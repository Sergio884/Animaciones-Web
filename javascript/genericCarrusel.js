const slide = document.querySelector('.carousel-slide');
        const prevButton = document.querySelector('.carousel-prev');
        const nextButton = document.querySelector('.carousel-next');

        let slidePosition = 0;
        let slidesVisible = 2;
        const slideMargin = parseInt(getComputedStyle(slide.children[0]).marginRight);
        let slideWidth = 0;
        let maxSlidePosition = 0;
        let totalSlides = 0;

        function updateSlideWidth() {
            slideWidth = slide.children[0].offsetWidth + slideMargin;
        }

        function updateSlidesVisible() {
            const containerWidth = slide.parentElement.offsetWidth;
            slidesVisible = Math.floor(containerWidth / slideWidth);
            maxSlidePosition = totalSlides - slidesVisible;
        }

        function updateSlidePosition() {
            slide.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
        }

        function moveSlide(direction) {
            updateSlideWidth();
            updateSlidesVisible();

            if (direction === 'prev') {
                slidePosition = (slidePosition - 1 + totalSlides) % totalSlides;
            } else if (direction === 'next') {
                slidePosition = (slidePosition + 1) % totalSlides;
            }

            updateSlidePosition();
            updateButtonState();
        }

        function updateButtonState() {
            prevButton.disabled = slidePosition === 0;
            nextButton.disabled = slidePosition >= maxSlidePosition;
        }

        function resetSlidePosition() {
            slidePosition = 0;
            updateSlidePosition();
            updateButtonState();
        }

        prevButton.addEventListener('click', () => {
            moveSlide('prev');
        });

        nextButton.addEventListener('click', () => {
            moveSlide('next');
            if (slidePosition === 0) {
                setTimeout(resetSlidePosition, 500); // Delay the reset to avoid abrupt jumps
            }
        });

        window.addEventListener('resize', () => {
            moveSlide('stay');
        });

        totalSlides = slide.children.length;
        cloneSlides();

        function cloneSlides() {
            const firstSlide = slide.children[0].cloneNode(true);
            const lastSlide = slide.children[totalSlides - 1].cloneNode(true);
            slide.appendChild(firstSlide);
            slide.insertBefore(lastSlide, slide.children[0]);
            totalSlides += 2;
            resetSlidePosition();
        }