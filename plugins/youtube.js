// Doc: https://nuxtjs.org/faq/google-analytics/

/* eslint-disable */

export default ({ app }) => {

  /*-----------------------------------
    * VIDEO FALLBACK
    *-----------------------------------*/
  function fallback(video) {
    var img = video.querySelector('img');
    if (img)
      video.parentNode.replaceChild(img, video);
  }


  /*-----------------------------------
    * YOUTUBE VIDEO
    *-----------------------------------*/
  $(".youtube").each(function () {
    // Based on the YouTube ID, we can easily find the thumbnail image
    //  $(this).css('background-image', 'url(https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg)');
    // $(this).css('background-size', 'cover');
    //$(this).css('background-position', '0 100px');

    // Overlay the Play icon to make it look like a video player
    //$(this).append($('<div/>', { 'class': 'play' }));

    var videoId = $(this).data('video-id');

    $(document).on('click', '.youtube', function () {
      // Create an iFrame with autoplay set to true
      var iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1&rel=0";
      if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

      // The height and width of the iFrame should be the same as parent
      var iframe = $('<iframe/>', { 'frameborder': '0', 'class': 'cast-shadow', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $(this).replaceWith(iframe);
    });
  });

}
