$('#email').focus();

$("#email").blur(function(){
	if(this.value.indexOf("@") >= 0)
	{
		$(this).removeClass('invalid');
		$('.input-svg').css('fill','#999999');
	}    
	else {
		$(this).addClass('invalid');
		$('.input-svg').css('fill','#E74C3C');
	}
});
$('#email').keyup(function() {
  if($(this).val() == 'jeremyboatman@gmail.com')
  {
    invalid(this);
  }    
  else {
    
  }
});
function invalid(this) {
  var input = this;
  input.addClass('invalid');
  $('.input-svg').css('fill','#E74C3C');
}


$('.username-input').keyup(function() {
    delay(function(){
      if($('.username-input').val().length > 0) {
      	$('.form-control-info').addClass('ng-hide');
      	$('#username-check').removeClass('ng-hide');
      	delay(function(){
      		$('.form-success-alert').removeClass('ng-hide');
      		$('#username-check').addClass('ng-hide');
      		$('#username-reqs').addClass('hide-label');
    	}, 1000 );
      }
      else {
      	$('.form-control-info').removeClass('ng-hide');
      	$('.hider').addClass('ng-hide');
      	$('#username-reqs').removeClass('hide-label');
      }
    }, 400 );
});
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();


