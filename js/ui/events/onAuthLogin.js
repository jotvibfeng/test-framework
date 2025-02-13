import { getPosts } from "../../api/posts/get.js";
import { login } from "../../auth/login.js";

export async function onAuthLogin(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  if (event.submitter.dataset.onAuth === "login") {
    await login(email, password);
  } else {
    await login(email, password);
  }

  await getPosts();
}
