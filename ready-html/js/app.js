window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`); // Використовуємо window.scrollY
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: false
});

