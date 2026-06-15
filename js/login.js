import { supabase } from "./supabase.js";
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert("Login failed: " + error.message);
      console.error(error);
      return;
    }

    // success → go admin page
    window.location.href = "admin.html";
  });
}

// GitHub OAuth button (if present)
const githubBtn = document.getElementById('githubSignIn');
if (githubBtn) {
  githubBtn.addEventListener('click', async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: window.location.origin + '/admin.html' }
      });
    } catch (err) {
      console.error('OAuth error', err);
      alert('Sign-in failed. Check console for details.');
    }
  });
}