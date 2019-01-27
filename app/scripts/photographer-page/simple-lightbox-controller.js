$(() => {
  const $gallery = $('.gallery a').simpleLightbox();
  $gallery.on('show.simplelightbox', () => {})
    .on('shown.simplelightbox', () => {})
    .on('close.simplelightbox', () => {})
    .on('closed.simplelightbox', () => {})
    .on('change.simplelightbox', () => {})
    .on('next.simplelightbox', () => {})
    .on('prev.simplelightbox', () => {})
    .on('nextImageLoaded.simplelightbox', () => {})
    .on('prevImageLoaded.simplelightbox', () => {})
    .on('changed.simplelightbox', () => {})
    .on('nextDone.simplelightbox', () => {})
    .on('prevDone.simplelightbox', () => {})
    .on('error.simplelightbox', () => {
    });
});
