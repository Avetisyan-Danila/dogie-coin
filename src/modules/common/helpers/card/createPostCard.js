import moment from "moment/moment";
import { cardNormalizeText } from "./cardNormalizeText";
import { cardDateText } from "./cardDateText";

const cardsWrapper = document.querySelector('.cards__wrapper');

export const createPostCard = (post) => {
    const card =
    `<article class="card">
        <picture>
            <source type="image/webp" srcset="assets/5d3bc898e642f116234c.webp 1x, assets/751b10174e9c9881c8cc.webp 2x">
            <img class="card__img" src="assets/224211a6b261da4f43b5.jpg" srcset="assets/fa57f7e5166a9d6c1dc1.jpg 2x" 
                alt="Тема поста: 'Как повысить свою продуктивность с помощью Dogecoin'">
        </picture>
        <div class="card__content">
            <header class="card__header">
                <div class="card__title">
                    <h3>
                        ${post.title}
                    </h3>
                </div>
            </header>
            <div class="card__text">
                <p>
                    ${cardNormalizeText(post.body)}
                </p>
            </div>
            <footer class="card__footer">
                <div class="card__author">
                    <p>Автор <b>USER-${post.id}</b>, </p>
                </div>
                <div class="card__publication-date">
                    <time dateTime="${moment().format("YYYY-MM-DD")}">
                        ${cardDateText(moment().format('DD MMMM YYYY'))}
                    </time>
                </div>
                <a class="card__button button button--black" href="#">Продолжить читать</a>
            </footer>
        </div>
    </article>`;

    cardsWrapper.insertAdjacentHTML('beforeend', card);
}
