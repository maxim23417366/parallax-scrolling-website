window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`); // Використовуємо window.scrollY
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: false
});

gsap.utils.toArray(".sky-parallax .layer").forEach(layer => {
  let depth = 0;

  if (layer.classList.contains('layers__sky-base')) depth = 20;
  if (layer.classList.contains('layers__sky-middle')) depth=70;
  if (layer.classList.contains('layers__sky-front')) depth = 120;

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

// Анімація заголовка в cave-паралаксі при появі
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
      start: "top 50%", // коли 20% заголовка видно
      toggleActions: "play none none reverse"
    }
  }
);

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

gsap.utils.toArray(".desert-parallax .layer").forEach(layer => {
  let depth = 0;

  if (layer.classList.contains('layers__desert-base')) depth = 20;
  if (layer.classList.contains('layers__desert-middle')) depth=100;
  if (layer.classList.contains('layers__desert-front')) depth = 150;

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

gsap.utils.toArray(".sea-parallax .layer").forEach(layer => {
  let depth = 0;

  if (layer.classList.contains('layers__sea-base')) depth = 20;
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

document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle-text");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const hiddenText = toggle.nextElementSibling;
      hiddenText.classList.toggle("show");
    });
  });
});

