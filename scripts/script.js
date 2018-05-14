    // Part 16

$("#lead-banner").dblclick(function(){
   alert("you clicked me"); 
   $("#lead-banner").off("dblclick");
});


    
    // Part 17
    
/*$(window).load(function(){
    
});*/



    // Part 18
    
$(document).ready(function(){
   $("*").on("click", function(e){
        console.log(e.target);
        console.log("the event tag is " + e.type);
        console.log("X coordinate of the event is: " + e.pageX);
        console.log("Y coordinate of the event is: " + e.pageY);
        e.stopPropagation();
   });
});