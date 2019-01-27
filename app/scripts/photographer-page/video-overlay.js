function autoPlayYouTubeModal() {
  const trigger = $('body').find('[data-toggle="modal"]');
  trigger.click(function show() {
    const theModal = $(this).data('target');
    const videoSRC = $(this).attr('data-theVideo');
    const videoSRCauto = ` ${videoSRC} ?autoplay=1`;
    $(`${theModal} iframe`).attr('src', videoSRCauto);
    $(`${theModal} button.close`).click(() => {
      $(`${theModal} iframe`).attr('src', videoSRC);
    });
  });
}
$(document).ready(() => {
  autoPlayYouTubeModal();
});
