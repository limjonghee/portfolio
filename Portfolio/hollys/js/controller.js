(function(){
	var current = 0;
	var max = 0;
	
	var container;
	
	
	function init(){
			container = jquery(".slider ul");
			max = container.children().length;
				
			console.log( "init" );

			events();
			
	}
	function events(){
		jquery("button.prev").on("click", prev);
		jquery("button.next").on("click", next);
	}
	
	function prev( e ){
		current--;
		if( current < 0 ) current = max-1;
		animate();
	}
	function next( e ){
		current++;
		if( current > max-1 ) current = 0;
		animate();
	}
	function animate(){
		var moveX = current = 500;
		TweenMax.to( container, 0.8, { marginleft:-moveX, ease:Expo.easeOut } );
	}
	jquery( document ).ready(init);
})();