const select = $('#js-lang-select');

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

function setUiValues(value) {
  homeLink.text(uiData[value].home);
  teamLink.text(uiData[value].team);
  authorsLink.text(uiData[value].authors);
  projectDescTitle.text(uiData[value].description_title);
  projectDescText.text(uiData[value].description_text);
  authorOfTheDayTitle.text(uiData[value].author_of_the_day);
}

function renderUI() {
  let language = '';
  if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
    $(`option[value=${language}]`).attr('selected', 'selected');
    setUiValues(language);
  } else {
    const selectLang = $('#js-lang-select');
    language = selectLang.val();
    setUiValues(language);
  }
}

renderUI();

select.change(() => {
  localStorage.setItem('lang', select.val());
  renderUI();
});

$(() => {
  (() => {

  })();

  (() => {})();
});
