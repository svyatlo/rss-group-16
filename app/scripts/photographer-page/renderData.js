function renderData(profile) {
  document.title = profile.name;
  $('.js-photographer-name').text(profile.name);

  if (profile.mainPhoto) {
    const mainPhoto = document.querySelector('.js-photographer-photo');
    mainPhoto.src = profile.mainPhoto;
    mainPhoto.alt = profile.name;
  } else {
    $('.js-photographer-photo').remove();
    $('.js-photographer').append('<p>Photos not available</p>');
  }

  if (profile.periodsOfLifeArray) {
    profile.periodsOfLifeArray.forEach((element) => {
      const timelineItemTemplate = `
      <div class="cd-timeline__block js-cd-block">
        <div class="cd-timeline__img cd-timeline__img--fact js-cd-img"></div>
        <div class="cd-timeline__content js-cd-content">
          <h2 class="js-cd-content-title">${element.fact}</h2>
          <p class="js-cd-content-description">${element.additional}</p>
          <span class="cd-timeline__date">${element.date}</span>
        </div>
      </div>`;
      $('.cd-timeline__container').append(timelineItemTemplate);
    });
  } else {
    $('.js-cd-timeline').remove();
  }

  if (profile.worksArray) {
    profile.worksArray.forEach((element) => {
      const workItemTemplate = `
      <li class="list-group-item js-list-of-works-item">
        <h3 class="js-list-of-works-item-title">${element.name}</h3>
        <p class="js-list-of-works-item-description">${element.description}</p>
      </li>`;
      $('.js-list-of-works').append(workItemTemplate);
    });
  } else {
    $('.js-works').remove();
  }

  if (profile.imagesArray) {
    profile.imagesArray.forEach((element) => {
      const galleryItemTemplate = `
      <a href=${element.src} class="js-gallery-item">
        <img src=${element.src} alt="${element.description}" title="${element.description}" class="js-gallery-item-image"/>
      </a>`;
      $('.js-gallery').append(galleryItemTemplate);
    });
    $('.js-gallery').append('<div class="clear"></div>');
  } else {
    $('.js-gallery-container').remove();
  }

  if (profile.videosArray) {
    profile.videosArray.forEach((element) => {
      const videoItemTemplate = `
      <li class="list-group-item js-videos-item">
        <a href="#" class="btn btn-default" data-toggle="modal" data-target="#videoModal" data-theVideo=${element.link}">${element.subscribe}</a>
      </li>
      `;
      $('.js-videos').append(videoItemTemplate);
    });
  } else {
    $('.js-video-container').remove();
  }

  if (profile.placeOfBirth.coordinate) {
    const mymap = L.map('mapid').setView(profile.placeOfBirth.coordinate, 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoiem0xdHJ5IiwiYSI6ImNqcmRwa2c3eTBrZWk0OXBvdnNlZGZqbHAifQ.4--wklrVhxA5gT6y4QM5RQ',
    }).addTo(mymap);

    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'by');
    }
    L.marker(profile.placeOfBirth.coordinate).addTo(mymap).bindPopup(`${profile.name} ${uiData[localStorage.getItem('lang')].map_popup_text}`).openPopup();
  } else {
    $('.js-map-container').remove();
  }
}
