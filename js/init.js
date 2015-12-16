(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50}); 
    $('.slider').slider({full_width: true});
    $('.scrollspy').scrollSpy();
    //$('.white').pushpin({ top: $('.white').offset().top });
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      min: [2015,11,9],
      max: [2016,5,9]

    });

    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      //ready: function() { alert('Ready'); }, // Callback for Modal open
      //complete: function() { $('#modal2').openModal(); } // Callback for Modal close
      }
    );

    $('.modal-trigger-social').leanModal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 500, // Transition out duration
      //ready: function() { alert('Ready'); }, // Callback for Modal open
      complete: function() { $('#modal2').openModal({
        in_duration: 100, 
        }); } // Callback for Modal close
	    }
	  );

    //Stop Video Playing when close modal
    $('.modal-close, .lean-overlay').click(function () {
      var video = $(".video-container iframe").attr("src");
      $(".video-container iframe").attr("src","");
      $(".video-container iframe").attr("src",video);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space