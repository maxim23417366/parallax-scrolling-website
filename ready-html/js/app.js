window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`); // Використовуємо window.scrollY
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: false
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("article").forEach(article => {
    gsap.to(article, {
        backgroundPosition: "50% 100%", // змінює позицію фону під час скролу
        ease: "none",
        scrollTrigger: {
            trigger: article,
            start: "top bottom",
            end: "bottom top",
            scrub: true // плавний ефект під час прокручування
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  let observerOptions = {
      root: null, // Відстежуємо відносно вікна браузера
      threshold: 0.1 // 10% елемента має бути видно
  };

  let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          } else {
              entry.target.classList.remove("visible");
          }
      });
  }, observerOptions);

  document.querySelectorAll(".second-article__header, .second-article__paragraph, .third-article__header, .third-article__paragraph")
      .forEach(element => observer.observe(element));
});
