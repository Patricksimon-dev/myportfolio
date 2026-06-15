import { supabase } from "./supabase.js";

async function sendMessage(name, email, message) {
  const { error } = await supabase
    .from("messages")
    .insert([{ name, email, message }]);

  if (error) {
    alert("Message failed");
    console.log(error.message);
  } else {
    alert("Message sent!");
  }
}

// example form handler
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  await sendMessage(name, email, message);
});

// Reveal-on-scroll: make elements with `.reveal` visible when they enter viewport
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items || items.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(i => observer.observe(i));
  } else {
    // Fallback: reveal all immediately
    items.forEach(i => i.classList.add('is-visible'));
  }
}

// Initialize when DOM is ready (module is loaded at end of body, but keep safe)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}