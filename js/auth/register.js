import { headers } from "../api/headers.js";
import { API_AUTH, API_BASE, API_REGISTER } from "../api/posts/constant.js";

export async function register(name, email, password, confirm_password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: headers(true),
    method: "POST",
    body: JSON.stringify({ name, email, password, confirm_password }),
  });

  const messageElement = document.getElementById("message");

  if (response.ok) {
    const data = await response.json();
    messageElement.textContent = "Registration successful";
    messageElement.style.color = "green";
    window.location = "/profile.html";
    return data;
  }

  try {
    await response.json();
  } catch (error) {
    messageElement.textContent = "Profile already exsits";
    messageElement.style.color = "red";
  }

  throw new Error("Could not register the account");
}
