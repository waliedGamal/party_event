//<!============================== navBar Slider functions ===========================!>
let sliderPostion = $(".navslider").innerWidth()
$(".navopen").click(function()
{
    currentPostion = $(".navslider").css("left")
    if(currentPostion == `0px`)
    {
        $(".navslider").animate({left:-sliderPostion},"2000")
    }
    else
    {
        $(".navslider").animate({left:`0px`},"2000")
    }
})


$(".hide").click(function () 
{ 
    let sliderPostion = $(".navslider").innerWidth()
    $(".navslider").animate({left:-sliderPostion},"2000")
});

$(".details h3").click(function()
{
    $(this).next().slideToggle(500)
    $(".details p").not( $(this).next() ).slideUp()
})

//<!==========================================================================================!>

$("#submit").keyup(function () 
{
    let maxchar = 100
    if($("#submit").val().length >= 100)
    {
        $("#max").text("your available character finished")
    }
    else
    {
        $("#max").text(maxchar - $("#submit").val().length)
    }
});

//<!========= navBar scrolling functions =======!>

$(".navslider a").click(function()
{
    let ahref = $(this).attr("href");
    let sectionPosition = $(ahref).offset().top;
    $("html , body").animate({scrollTop:sectionPosition},1000)
})


// <!===================================================================================================>

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
        $("#duration #day").text(days)
        $("#houres").text(hours)
        $("#min").text(minutes)
        $("#sec").text(seconds)

}, 1000);

