$(() => {
  // eslint-disable-next-line no-undef
  const infoArray = data;
  const randomNum = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  };
  (() => {
    const randomInteger = randomNum(0, infoArray.length - 1);
    const author = infoArray[randomInteger];
    const picture = document.querySelector('.author-of-the-day__pic');
    const name = document.querySelector('.author-of-the-day__name');
    const info = document.querySelector('.author-of-the-day__text');
    const link = document.querySelector('.author-of-the-day__link');
    picture.setAttribute('src', author.mainPhoto);
    name.textContent = author.name;
    info.textContent = author.generalInfo;
    link.setAttribute('href', `./photographer_${author.id}.html`);
  })();
});
