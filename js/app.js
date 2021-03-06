var app = (function() {
  
  var createBackgroundClouds = function() {
    var i;
    
    for ( i = 0; i < 15; i++ ) {
      $('.bg-clouds').append('<span></span>');
    }
    
    var clouds = $('.bg-clouds').find('span');
    
    clouds.each(function(i, cloud) {
      var size = randomNum() + 'px',
          delay = Math.random() * 3 + 1 + 's';
      
      $(cloud).css({
        top: randomNum() + 'vh',
        left: randomNum() + 'vw',
        width: size,
        height: size,
        animationDelay: delay 
      });
    });
  };
  
  var checkStreamStatus = function() {
    var url = 'https://wind-bow.gomix.me/twitch-api/streams/frostedcaribou';
    
    $.getJSON(url, function(data) {
        if ( !data.stream ) $('.stream-alert').addClass('show');
    });
  };
  
  var closeStreamAlert = function() {
    $('.stream-alert').removeClass('show');
  };
  
  var showModal = function() {
    var link = $(this).attr('href');
    console.log(link);
    if ( link == '#about' ) {
      $('.about-modal').addClass('show');
    } else $('.contact-modal').addClass('show');
  };
  
  var closeModal = function() {
    $('.about-modal, .contact-modal').removeClass('show');
  };
  
  var randomNum = function() {
    return Math.floor(Math.random() * 95) + 1;
  };
  
  var init = function() {
    createBackgroundClouds();
    checkStreamStatus();
    
    $('.stream-alert').find('.fa').on('click', closeStreamAlert);
    $('.main-nav').find('a').on('click', showModal);
    $('.about-modal, .contact-modal').find('.fa').on('click', closeModal);
  };
  
  return { init: init }
})();

app.init();