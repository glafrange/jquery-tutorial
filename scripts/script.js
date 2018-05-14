    // Part 13
    
/*$("#social-nav").css({
    "top": "-400px",
    "left": "158px",
    "opacity": "0.5",
    "border-top": "4px solid red"
});
*/

    
    
    // Part 14
    
$("header .wrapper").removeClass("wrapper");
$("header > div").addClass("wrapper");

var button = $("#lead-banner a");

button[0].onclick = function(){
    $("#points-of-sale").toggleClass("open");
    return false;
}



    // Part 15
    
var myLis = $("#points-of-sale li");

myLis.on("click", function(){
    $(this).css({background: "pink"});
    myLis.off("click");
});