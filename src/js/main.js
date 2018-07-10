$(window).bind("load", function() {
  //when the content is loaded
  console.log('loaded');
  $('.load').addClass('load-done');

  //with setTimeOut
  setTimeout(function(){
    console.log('loaded after setTimeOut')
    $('.jq').addClass('preload');
  }, 2000);
});
