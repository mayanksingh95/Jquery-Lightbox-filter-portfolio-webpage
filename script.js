$(document).ready(function() {
    $('nav a').on('click', function(){
	
		// Current class assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
        
        //set heading text
        $('h1#heading').text($(this).text());
       
	   
	   
        //get and filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');//replace spaces with dashes
        
        //remove hidden class if 'all-projects' is selected
        if(category == 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else { // if not all-projects
            $('ul#gallery li').each(function() {//loop thru gallery <li>s
                if(!$(this).hasClass(category)) {//if this <li> does not have the current category class
                    $(this).hide().addClass('hidden');//hide it
                } else { 
                    $(this).fadeIn('slow').removeClass('hidden');//show it
                }
            });
        }
        
        return false;
    });
    
    $('ul#gallery li').on('mouseenter', function() {
        //get data attribute values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        //validation
        if(desc == null) {
            desc = 'Click to Enlarge';    
        }
        
        if(title == null) {
            title = '';    
        }
        
        //create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay');
        
        //add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        //fadein overlay
        overlay.stop().fadeIn(800);
    });
    
	

    $('ul#gallery li').on('mouseleave', function() {
        //create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay');
        
        //fadeout overlay
        overlay.stop().fadeOut(500);
    });
  

});//end document ready

























