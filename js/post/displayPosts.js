import { deletePost } from "./deletePost.js";
import { showUpdateModal } from "./showUpdateModal.js";

export function displayPosts(posts) {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add(
      "border",
      "rounded-lg",
      "p-4",
      "mb-4",
      "bg-white",
      "shadow-md"
    );

    const postTitle = document.createElement("h3");
    postTitle.classList.add("text-xl", "font-bold", "mb-2");
    postTitle.textContent = post.title;

    const postBody = document.createElement("p");
    postBody.classList.add("text-gray-700", "mb-4");
    postBody.textContent = post.body || "No content available"; // Handle null values

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("text-gray-600", "mb-4");
    postAuthor.textContent = `Post by: ${post.id}`;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("flex", "gap-4"); // Add flex and gap classes

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "bg-customPurple",
      "text-white",
      "px-6",
      "py-2",
      "rounded-lg",
      "hover:bg-purple-600",
      "transition"
    );
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deletePost(post.id);

    const updateButton = document.createElement("button");
    updateButton.classList.add(
      "bg-teal-500",
      "text-white",
      "px-6",
      "py-2",
      "rounded-lg",
      "hover:bg-teal-600",
      "transition"
    );
    updateButton.textContent = "Update";
    updateButton.onclick = () =>
      showUpdateModal(post.id, post.title, post.body || "");

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(updateButton);

    postElement.appendChild(postTitle);
    postElement.appendChild(postBody);
    postElement.appendChild(postAuthor);
    postElement.appendChild(buttonContainer);

    postsContainer.appendChild(postElement);
  });
}
