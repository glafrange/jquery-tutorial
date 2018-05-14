    // Part 19

/*$(document).ready(function(){
    function complete(){
        alert("animation complete");
    }
    $("section > h2").on("click", function(){
        $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", complete); 
    });
});*/



    // Part 20
    
/*$(document).ready(function(){
    $("section > h2").on("click", function(){
        //$(this).fadeOut(2000).fadeIn(500); 
        $(this).fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8);
    });
});*/



    // Part 21

$(document).ready(function(){
    $("img[alt=map]").on("click", function(){
        $("section > h2").toggle(1000);
    });
});