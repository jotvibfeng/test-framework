import { getPosts } from "../../api/posts/get.js";
import { register } from "../../auth/register.js";

export async function onAuth(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const confirm_password = event.target.confirm_password.value;

  if (event.submitter.dataset.auth === "register") {
    await register(name, email, password, confirm_password);
  } else {
    await register(name, email, password, confirm_password);
  }

  await getPosts();
}
