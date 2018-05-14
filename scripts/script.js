    // Part 22

$(document).ready(function(){
    
    $(".slide-button-up").on("click", function(){
        $("#lead-banner").slideToggle(1000, function(){
            alert("animation complete");
        });
    });
    
});




    // Part 23

$(document).ready(function(){
    
    var allQuotes = $("blockquote");
    var currentQuote = 0;
    
    function changeQuote(){
        
        $(allQuotes[currentQuote]).fadeOut(200, function() {
            if(currentQuote == allQuotes.length-1) {
                currentQuote = 0;
            } else {
                currentQuote++;
            }
            
            $(allQuotes[currentQuote]).fadeIn(200);
        });
        

        
    }
    
    var quoteTimer = setInterval(changeQuote, 3000);
    
});



    // Part 24

$(document).ready(function(){
   
   var items = $("#points-of-sale li");
   
   items.on('click', function() {
       
       $(this).find("p").slideToggle(500);
       
   })
    
});