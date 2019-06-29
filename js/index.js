// window.addEventListener("load", showPage);

// function showPage() {
//   $('.layer').removeClass('data'); 
// }

$(document).ready(function() {
  $('.layer').removeClass('data'); 

});



$(document).ready(function() {

 



$(".work-bt").click(function(){
  var value = $(this).attr("data-filter");
  if (value == "all")
  {
    $(".filter").show("1000");
  }
  else
  {
    $(".filter").not("."+value).hide("1000");
    $(".filter").filter("."+value).show("1000");
  }
});


function myMap() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

// let myVideo = document.getElementById("video"); 
// document.getElementById("video").addEventListener('click', (event) => {
//   if(myVideo.paused){
//     setTimeout(() => {   
//       myVideo.play();
//       myVideo.controls = true;    
//   }, 380); 

//   myVideo.classList.add("goVideo");
//   const goo= $("#content")
//   goo.addClass('change');
//   }else {
//     $("#video").removeClass("goVideo");
//     const goo= $("#content")
//     $("#video").addClass("then");
//     $("#video").removeClass("goVideo");
//     setTimeout(() => {   
//       $("#video").removeClass("then");
//   }, 420); 
//   goo.removeClass('change');  
    
//   }
//   myVideo.addEventListener('ended', function() {
//     myVideo.load();     
//   });

//   console.log(myVideo);
// });


$('.count').each(function() {
  var $this = this;
  let countTo = $this.dataset.count;
  let localStart = 0;
  setInterval(function() {
    if (localStart < countTo) {
      localStart++;
      $this.innerHTML = localStart;
    }
  }, 40);
  console.log(countTo);
  
});




(function() {
    let navLinks = $('nav ul li');
    const sections = $('.card-section');   
    navLinks.click(function(){ 
               
         
      let ad = $('.up1')
      ad.css({"animation": "close 1s cubic-bezier(0.740, 0.150, 0.835, 0.345) forwards"});
      let dod = $('.up2')
      dod.css({"animation": "close 1.3s cubic-bezier(0.740, 0.150, 0.835, 0.345) forwards"}); 
    
   
        let self = $(this);
          let target = self.children().attr('href');
          let targetClass = '.' + target;
          let targetSection = $(`${targetClass}-card`);

          navLinks.each((el, val) => {
            const currentNav = val.className;
            if(currentNav.includes('active-nav')){
              val.classList.remove('active-nav');
              
            }            
          });  

          setTimeout(()=> {
            sections.each((el, val) => {
              var currentSection = val.className;
              if(currentSection.includes('active-section')){
                val.classList.remove('active-section');
              }            
            });
            if(target === 'about'){
              $('#main-card').css("background-image", "url(image/Lines.png), url(image/About_background.jpg)")
            } else if(target === 'home'){
              $('#main-card').css("background-image", "url(image/Lines.png), url(image/Background.jpg)")
            }else {
              $('#main-card').css("background-image", "none");
            } 
            targetSection.addClass('active-section'); 
          }, 600);
          $(targetClass).addClass('active-nav');
                 
 
setTimeout(()=> {
  let ad = $('.up1')
  ad.css({"animation": "opend 1.6s ease-in-out forwards"});
}, 1300);

setTimeout(()=> {
  let dodo = $('.up2')
  dodo.css({"animation": "opend 1s ease-in-out forwards"});
}, 1300);
         
    });
})();
});

$('.social-btn').click(function(el) {

  // $('.social-btn svg')[0].dataset.icon = 'angle-left'
  console.log( $('.social-btn svg'));
  $('.home-social-icon').toggleClass('active-social')
  var btnIcon = $('.social-btn svg')[0].dataset.icon
  if(btnIcon === 'angle-left'){
    $('.social-btn svg')[0].dataset.icon = 'angle-right';
  } else {
    $('.social-btn svg')[0].dataset.icon = 'angle-left';
  }
  console.log( $('.social-btn svg'));
  
});    

// Animation burger menu 

var touch = $('#burger-menu');
var menu = $('.mobile');


$(touch).click(function(e) {
  e.preventDefault();
  menu.toggleClass('act-mobile');
  var arr = [];  
    $('.mobile-menu ul li').each((el, val) => {     
      arr.push(val);                
    });  

    if(menu.hasClass('act-mobile')) {
      arr.forEach((val, index) => {
        $(val).css({"animation": `dreg-out ${0.6 + (0.1*index)}s cubic-bezier(1.000, 0.015, 0.325, 0.985) forwards`});
      });

     } else {
      arr.reverse();
      arr.forEach((val, index) => {
        $(val).css({"animation": `dreg-in ${0.6 - (0.1*index)}s cubic-bezier(1.000, 0.015, 0.325, 0.985) forwards`});
      });
     }


 

});
