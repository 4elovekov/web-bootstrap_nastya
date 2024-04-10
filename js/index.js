document.addEventListener("DOMContentLoaded", function() {
    const carouselElement = document.querySelector('#carouselExampleControls');

    // Явная инициализация карусели
    const carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: false, // Пример настройки, вы можете настроить карусель как вам нужно
    });

    let startX;
    const sensitivity = 5; // Минимальное расстояние для свайпа.

    carouselElement.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    carouselElement.addEventListener('touchmove', e => {
        if (!startX) {
            return;
        }

        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (Math.abs(diffX) > sensitivity) {
            if (diffX > 0) {
                // Свайп влево
                carouselInstance.next();
            } else {
                // Свайп вправо
                carouselInstance.prev();
            }

            startX = null; // Сбросить начальное значение X
        }
    });
});