 // Ensure animations trigger when elements are in view
 document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("opacity-100", "translate-y-0");
    });
    const swiper = new Swiper(".swiper", {
        loop: false,
        on: {
            slideChange: function () {
                updateActiveButton(this.realIndex);
            },
        },
    });

    document.querySelectorAll(".nav-btn").forEach((btn, index) => {
        btn.addEventListener("click", function () {
            swiper.slideToLoop(index);
        });
    });

    function updateActiveButton(activeIndex) {
        document.querySelectorAll(".nav-btn").forEach((btn, index) => {
            btn.classList.toggle("active", index === activeIndex);
        });
    }
    updateActiveButton(swiper.realIndex);
});