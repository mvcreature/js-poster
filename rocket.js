$('button').on('click', function(){

  var $this = $(this);
  var btnCtn = $this.find('span');

  $('html').toggleClass('play');




  btnCtn.html( btnCtn.html() === 'play' ? 'play' : 'pause' );


});
