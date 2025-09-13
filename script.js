// Cursor effect
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Counters
document.querySelectorAll('.counter').forEach(counter => {
  let update = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    let increment = target / 100;
    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 30);
    } else counter.innerText = target;
  };
  update();
});

// Scroll reveal
gsap.utils.toArray(".fade-section, .scroll-reveal, .card").forEach(elem => {
  gsap.from(elem, {
    scrollTrigger: elem,
    y: 50, opacity: 0, duration: 1, ease: "power2.out"
  });
});
