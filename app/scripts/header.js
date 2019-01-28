$(() => {
  const select = $('#js-lang-select');
  const uiData = {
    ru: {
      home: 'Главная',
      team: 'Команда',
      authors: 'Фотографы',
      author_of_the_day: 'Фотограф дня',
      description_title: 'Описание проекта',
      description_text: 'Наш проект - это учебный прототип многостраничного портала посвящённого фотографии Беларуси. Здесь собраны разные авторы начиная с XIX века, заканчивая... Надеемся, что фотография в Беларуси не заканчится никогда. Пройдя по страничкам нашего портала вы можете посмотреть работы пионера фотографии в Беларуси Генрика Тышкевича, также классиков Хоментовской, Булгака, Наппельбаума, Дашкевича. Современная фотография представлена также очень сильным автором, который к сожалению очень рано ушёл от нас в возрасте 57 лет - Валерия Лобко. Пример копирайтерского "искусства", посвящённого сайту о фотографиим был представлен ниже, но было решено от него избавиться, потому что переводить его на 2 дополнительных языка не представлялось возможным.',
      works_section_title: 'Список работ фотографа',
      gallery_section_title: 'Галерея',
      video_section_title: 'Видео',
      map_section_title: 'Значимые места',
      map_popup_text: 'Место рождения',
      seach_label: 'Поиск по имени, дате или месту рождения',
      seach_input: 'Введите запрос',
      table_fullname: 'ФИО',
      table_dateOfBirth: 'Дата рождения',
      table_placeOfBirth: 'Место Рождения',
      link_more: 'Подробнее',
    },
    by: {
      home: 'Галоўная',
      team: 'Каманда',
      authors: 'Фатографы',
      author_of_the_day: 'Фатограф дня',
      description_title: 'Апісанне праэкта',
      description_text: 'Наш праэкт - гэта вучобны прататып шматстаронкавага партала прысвечанага фатаграфии Беларусі. Тут мы сабралі розных аўтараў пачынаючы з XIX стагоддзя, заканчваючы ... Спадзяемся, што фатаграфія ў Беларусі не скончыцца ніколі. Калі вы пройдзеце па старонках нашага партала, вы зможаце паглядзець працы піянера фатаграфіі на Беларусі Генрыка Тышкевіча, таксама і класікаў Хамянтоўскай, Булгака, Напельбаума, Дашкевіча. Сучасная фатаграфія прадстаўлена таксама вельмі моцным аўтарам, які дажалю вельмі рана сышоў ад нас ва ўзросце 57 гадоў - Валерыя Лабко. Прыклад капірайтарскага майстэрства, прысвечанага сайту аб фатаграфіі быў прадстаўлены ніжэй, але было вырашана ад яго пазбавіцца, бо перакладаць яго на яшчэ 2 мовы не ўяўлялася магчымым.',
      works_section_title: 'Спіс работ фатографа',
      gallery_section_title: 'Галерэя',
      video_section_title: 'Відэа',
      map_section_title: 'Значныя месцы',
      map_popup_text: 'Месца нараджэння',
      seach_label: 'Пошук па імені, даце альбо месцы нараджэння',
      seach_input: 'Увядзіце запыт',
      table_fullname: 'Iмя',
      table_dateOfBirth: 'Дата нараджэння',
      table_placeOfBirth: 'Месца нараджэння',
      link_more: 'Падрабязней',
    },
    eng: {
      home: 'Home',
      team: 'Team',
      authors: 'Photographers',
      author_of_the_day: 'Photographer of the day',
      description_title: 'Project Description',
      description_text: 'Our project is a study prototype of multipage portal which is dedicated to photography of Belarus.  Here we collected different authors starting from the XIX century, and finishing... We hope that photography in Belarus will never end. You can see works and masterpieces of Henryk Tyszkiewicz, classical works of Chamiantouskaja, Bulgak, Napelbaum, Daszkiewicz. Contemporary photography is presented here by such robust and keen photographer - Valery Labko (RIP). Also we had a "masterpiece" of copyrighting art, but we decided to get rid of it. Cause we didn\'t want to translate it into 2 additional languages.',
      works_section_title: 'List of works',
      gallery_section_title: 'Gallery',
      video_section_title: 'Video',
      map_section_title: 'Significant places',
      map_popup_text: 'Place of birth',
      seach_label: 'Search by name, place or date of birth',
      seach_input: 'Enter your request',
      table_fullname: 'Full name',
      table_dateOfBirth: 'Birth date',
      table_placeOfBirth: 'Birth place',
      link_more: 'More info',
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
  const searchLabel = $('#js-search-label');
  const searchInput = $('#js-search-input');
  const mapPopupText = $('#js-popup-text');
  const table_fullname_text = $('#table-fullname');
  const table_dateOfBirth_text = $('#table-dateOfBirth');
  const table_placeOfBirth_text = $('#table-placeOfBirth');
  const link_more_text = $('#link-more');

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
    searchLabel.text(uiData[value].seach_label);
    searchInput.attr('placeholder', uiData[value].seach_input);
    mapPopupText.text(`${uiData[value].map_popup_text}`);
    table_fullname_text.text(uiData[value].table_fullname);
    table_dateOfBirth_text.text(uiData[value].table_dateOfBirth);
    table_placeOfBirth_text.text(uiData[value].table_placeOfBirth);
    link_more_text.text(uiData[value].link_more);
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
});
