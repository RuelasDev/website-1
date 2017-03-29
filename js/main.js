

var mottos = ["Fast, Reliable on Demand Deliveries",
             "Choose what time you want your package",
             "Fast, Helpful Customer Service",
             "Save Money, Save Time "
              ]

var counter = 0;


/* MOBILE MENU */

$('.menu-button').click( function () {
  
   if ($(".main-nav ul").hasClass('open')) {
     $(".main-nav ul").removeClass('open');
   }
  
  else {
    $(".main-nav ul").addClass('open');
  }
  
});
  





/* Header text slide show */
  
function TextChanger () {
  
   $("#motto-container span").delay(3000).animate({opacity: 0});
  
  setInterval(function () {
  
    $("#motto-container span").animate({opacity:1}).html(mottos[counter]).delay(3000).animate({opacity:0});
    
            counter += 1;
        if (counter === 4) {
            counter =  0;
           }
           }, 4000);
  
        };


/* NAVIGATION SMOOTHSCROLL */

$("header  a").click(function (e) {
  var link = $(this).attr('href');
  
  $('html, body').animate({
    
    scrollTop: $(link).offset().top
    
  });

  e.preventDefault();
  
});


TextChanger ()


          
  


      
              

  


