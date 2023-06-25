import moment from "moment/moment";
import { cardNormalizeText } from "./cardNormalizeText";
import { cardDateText } from "./cardDateText";

const cardsWrapper = document.querySelector('.cards__wrapper');

export const createPostCard = (post) => {
    const card = document.createElement('article');
    card.classList.add('card');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card__img');
    cardImg.src = 'https://wallpapers.com/images/file/astronaut-doge-meme-ysh8psu98frsd3yt.jpg';
    cardImg.alt = `Тема поста: '${post.title}'`;

    card.append(cardImg);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');

    const cardHeader = document.createElement('header');
    cardHeader.classList.add('card__header');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = post.title;

    cardHeader.append(cardTitle);
    cardContent.append(cardHeader);

    const cardText = document.createElement('p');
    cardText.classList.add('card__text');
    cardText.textContent = cardNormalizeText(post.body);
    cardContent.append(cardText);

    const cardFooter = document.createElement('footer');
    cardFooter.classList.add('card__footer');

    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('card__author');
    cardAuthor.innerHTML = `Автор <b>USER-${post.id}</b>, `;

    const cardDate = document.createElement('time');
    cardDate.classList.add('card__publication-date');
    cardDate.dateTime = moment().format("YYYY-MM-DD");
    cardDate.textContent = cardDateText(moment().format('DD MMMM YYYY'));

    const cardButton = document.createElement('a');
    cardButton.classList.add('card__button', 'button', 'button--black');
    cardButton.href = '#';
    cardButton.innerHTML = '<span>Продолжить читать</span>';

    cardFooter.append(cardAuthor, cardDate, cardButton);
    cardContent.append(cardFooter);

    card.append(cardContent);
    cardsWrapper.append(card);
}
