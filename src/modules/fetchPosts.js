import axios from "axios";
import { fadeOut } from "./utils";
import { createPostCard } from "./common/helpers/card/createPostCard";

const loadMoreButton = document.querySelector('.cards__button');
const totalPages = 5;
const limit = 5;
let page = 1;
let isloading = false;

const loadMorePosts = async () => {
    if (isloading) return;

    isloading = true;
    loadMoreButton.style.opacity = 0.5;
    loadMoreButton.style.pointerEvents = 'none';

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _page: page,
            _limit: limit
        }
    });

    const posts = response.data;
    posts.forEach((post) => createPostCard(post));

    isloading = false;
    loadMoreButton.style.opacity = 1;
    loadMoreButton.style.pointerEvents = 'auto';

    if (page === totalPages) {
        fadeOut(loadMoreButton);
    }

    page++;
}

loadMoreButton.addEventListener('click', loadMorePosts);
