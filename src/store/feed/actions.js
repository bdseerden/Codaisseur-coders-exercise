// src/store/feed/actions.js
import axios from "axios";
import { startLoading, postsFetched } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export async function fetchPosts(dispatch, getState) {
  try {
    dispatch(startLoading());

    const offset = getState().feed.posts.length;

    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=5`
    );
    //console.log("response", response)
    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    console.log(e.message);
  }
}
