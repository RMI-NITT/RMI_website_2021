(function($){
  $(function(){

    $('.button-collapse').sideNav(
    	{
    		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true
    	});
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

