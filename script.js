// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== FADE-IN SECTIONS ON SCROLL =====
const sections = document.querySelectorAll("section");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

sections.forEach(section => {
  section.classList.add("hidden");
  appearOnScroll.observe(section);
});

// ===== FLOATING ORBS RANDOM MOVEMENT =====
const orbs = [];
for (let i = 0; i < 15; i++) {
  const orb = document.createElement("div");
  orb.classList.add("orb");
  orb.style.width = `${30 + Math.random() * 60}px`;
  orb.style.height = orb.style.width;
  orb.style.left = `${Math.random() * 100}%`;
  orb.style.top = `${Math.random() * 100}%`;
  orb.style.animationDelay = `${Math.random() * 10}s`;
  document.querySelector(".floating-orbs").appendChild(orb);
  orbs.push(orb);
}
