particlesJS("particles-js", {
  particles: {
    number: {
      value: 218,
      density: { enable: true, value_area: 2919.846274039409 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: {
        enable: false,
        speed: 194.8985309523228,
        size_min: 8.932849335314796,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 16.03412060865523,
      color: "#ffffff",
      opacity: 0.1763753266952075,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top-right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
