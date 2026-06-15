import { supabase } from "./supabase.js";

// 1. Protect admin page
async function protectAdmin() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    window.location.href = "login.html";
  }
}

await protectAdmin();

// 2. Load messages
async function loadMessages() {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
    return;
  }

  const container = document.getElementById("messages");
  container.innerHTML = "";

  data.forEach(msg => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h4>${msg.name}</h4>
      <p>${msg.email}</p>
      <p>${msg.message}</p>
      <hr>
    `;
    container.appendChild(div);
  });
}

loadMessages();