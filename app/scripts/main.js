const select = $('#js-lang-select');
// const langVal = select.val();

const uiData = {
  ru: {
    home: 'Главная',
    team: 'Команда',
    authors: 'Фотографы',
    author_of_the_day: 'Фотограф дня',
    description_title: 'Описание проекта',
    description_text: 'Описание проекта на русском языке',
  },
  by: {
    home: 'Галоўная',
    team: 'Каманда',
    authors: 'Фатографы',
    author_of_the_day: 'Фатограф дня',
    description_title: 'Апісанне праэкта',
    description_text: 'Апісанне праэкта на беларускай мове',
  },
  eng: {
    home: 'Home',
    team: 'Team',
    authors: 'Photographers',
    author_of_the_day: 'Photographer of the day',
    description_title: 'Project Description',
    description_text: 'Project Description in english',
  },
};
const homeLink = $('#js-nav-home');
const teamLink = $('#js-nav-team');
const authorsLink = $('#js-nav-authors');
const projectDescTitle = $('#js-desc-title');
const projectDescText = $('#js-desc-text');
const authorOfTheDayTitle = $('#js-day-author-title');

function renderUI() {
  const selectLang = $('#js-lang-select');
  const lang = selectLang.val();
  homeLink.text(uiData[lang].home);
  teamLink.text(uiData[lang].team);
  authorsLink.text(uiData[lang].authors);
  projectDescTitle.text(uiData[lang].description_title);
  projectDescText.text(uiData[lang].description_text);
  authorOfTheDayTitle.text(uiData[lang].author_of_the_day);
}
renderUI();

select.change(renderUI);

$(() => {
  (() => {

  })();

  (() => {})();
});
