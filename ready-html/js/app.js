//Збереження scroll-позиції в змінну CSS
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`); // Використовуємо window.scrollY
});
//Ініціалізація ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: false
});
//Паралакс для секції sky-parallax
gsap.utils.toArray(".sky-parallax .layer").forEach(layer => {
  let depth = 0;

  if (layer.classList.contains('layers__sky-base')) depth = 30;
  if (layer.classList.contains('layers__sky-middle')) depth=50;
  if (layer.classList.contains('layers__sky-front')) depth = 70;

  gsap.to(layer, {
    y: `${depth}px`,
    ease: "none",
    scrollTrigger: {
      trigger: ".sky-parallax",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });
});
// Анімація заголовка в sky-parallax при появі
gsap.fromTo(".sky-parallax .layer__header", 
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".sky-parallax .layer__header",
      start: "top 50%", // коли 50% заголовка видно
      toggleActions: "play none none reverse"
    }
  }
);
// Паралакс для desert-parallax
gsap.utils.toArray(".desert-parallax .layer").forEach(layer => {
  let depth = 0;

  if (layer.classList.contains('layers__desert-base')) depth = 30;
  if (layer.classList.contains('layers__desert-middle')) depth=100;
  if (layer.classList.contains('layers__desert-front')) depth = 150;

  gsap.to(layer, {
    y: `${depth}px`,
    ease: "none",
    scrollTrigger: {
      trigger: ".desert-parallax",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });
});

gsap.fromTo(".desert-parallax .layer__header", 
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".desert-parallax .layer__header",
      start: "top 50%", // коли 20% заголовка видно
      toggleActions: "play none none reverse"
    }
  }
);
// Паралакс для sea-parallax
gsap.utils.toArray(".sea-parallax .layer").forEach(layer => {
  let depth = 0;

  if (layer.classList.contains('layers__sea-base')) depth = 30;
  if (layer.classList.contains('layers__sea-middle')) depth=110;
  if (layer.classList.contains('layers__sea-front')) depth = 50;

  gsap.to(layer, {
    y: `${depth}px`,
    ease: "none",
    scrollTrigger: {
      trigger: ".sea-parallax",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });
});

gsap.fromTo(".sea-parallax .layer__header", 
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".sea-parallax .layer__header",
      start: "top 50%", // коли 20% заголовка видно
      toggleActions: "play none none reverse"
    }
  }
);
// Розгортання прихованого тексту
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle-text");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const hiddenText = toggle.nextElementSibling;
      hiddenText.classList.toggle("show");
    });
  });
});

