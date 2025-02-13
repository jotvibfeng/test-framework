import { headers } from "../headers.js";
import { API_BASE, API_POSTS, API_SEARCH } from "./constant.js";

export async function getPosts() {
  const response = await fetch(API_BASE + API_POSTS, {
    headers: headers(),
  });
  return await response.json();
}

export async function searchPosts(query, postsPage = 1, maxPosts = 10) {
  const options = {
    method: "GET",
    headers: headers(true),
  };
  const response = await fetch(
    `${
      API_BASE + API_SEARCH
    }?q=${query}&_author=true&limit=${maxPosts}&page=${postsPage}`,
    options
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
