const select = $('#js-lang-select');

const uiData = {
  ru: {
    home: 'Главная',
    team: 'Команда',
    authors: 'Фотографы',
    author_of_the_day: 'Фотограф дня',
    description_title: 'Описание проекта',
    description_text: 'Описание проекта на русском языке',
    works_section_title: 'Список работ фотографа',
    gallery_section_title: 'Галерея',
    video_section_title: 'Видео',
    map_section_title: 'Значимые места',
    map_popup_text: 'родился здесь',
  },
  by: {
    home: 'Галоўная',
    team: 'Каманда',
    authors: 'Фатографы',
    author_of_the_day: 'Фатограф дня',
    description_title: 'Апісанне праэкта',
    description_text: 'Апісанне праэкта на беларускай мове',
    works_section_title: 'Спіс работ фатографа',
    gallery_section_title: 'Галерэя',
    video_section_title: 'Відэа',
    map_section_title: 'Значныя месцы',
    map_popup_text: 'нарадзіўся тут',
  },
  eng: {
    home: 'Home',
    team: 'Team',
    authors: 'Photographers',
    author_of_the_day: 'Photographer of the day',
    description_title: 'Project Description',
    description_text: 'Project Description in english',
    works_section_title: 'List of works',
    gallery_section_title: 'Gallery',
    video_section_title: 'Video',
    map_section_title: 'Significant places',
    map_popup_text: 'was born here',
  },
};
const homeLink = $('#js-nav-home');
const teamLink = $('#js-nav-team');
const authorsLink = $('#js-nav-authors');
const projectDescTitle = $('#js-desc-title');
const projectDescText = $('#js-desc-text');
const authorOfTheDayTitle = $('#js-day-author-title');
const worksSecTitle = $('#js-works-title');
const gallerySecTitle = $('#js-gallery-title');
const videoSecTitle = $('#js-video-title');
const mapSecTitle = $('#js-map-title');

function setUiValues(value) {
  homeLink.text(uiData[value].home);
  teamLink.text(uiData[value].team);
  authorsLink.text(uiData[value].authors);
  projectDescTitle.text(uiData[value].description_title);
  projectDescText.text(uiData[value].description_text);
  authorOfTheDayTitle.text(uiData[value].author_of_the_day);
  worksSecTitle.text(uiData[value].works_section_title);
  gallerySecTitle.text(uiData[value].gallery_section_title);
  videoSecTitle.text(uiData[value].video_section_title);
  mapSecTitle.text(uiData[value].map_section_title);
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
