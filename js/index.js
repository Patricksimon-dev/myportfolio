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