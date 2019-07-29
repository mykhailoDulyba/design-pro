$(document).ready(init());

function init() {
  // Preloader
  $('.layer').removeClass('data');

  // Gallery filter
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

  // Google map
  function myMap() {
    var mapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }

  //About counter
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
  });




  let navLinks = $('nav ul li');
  const sections = $('.card-section'); 

  navLinks.click(function(){
    let self = $(this);
    let target = self.children().attr("data-page");
    let targetClass = '.' + target;
    let targetSection = $(`${targetClass}-card`);
    let menuType = self.parent().parent().hasClass('main-menu');

    navLinks.each((el, val) => {
      const currentNav = val.className;
      if(currentNav.includes('active-nav')){
        val.classList.remove('active-nav');
        
      }            
    });

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

    $(targetClass).addClass('active-nav');

    var menuItems =  getMenuItems();
    menuAnimationOff(menuItems);
    menu.removeClass('act-mobile');
   
  });

  // Social button

  $('.social-btn').click(function(el) {
    $('.home-social-icon').toggleClass('active-social')
    var btnIcon = $('.social-btn svg')[0].dataset.icon
    if(btnIcon === 'angle-left'){
      $('.social-btn svg')[0].dataset.icon = 'angle-right';
    } else {
      $('.social-btn svg')[0].dataset.icon = 'angle-left';
    }    
  });    

// Animation burger menu 

  var touch = $('#burger-menu');
  var menu = $('.mobile');

  $(touch).click(function() {
    menu.toggleClass('act-mobile');
    menuAnimation();
  });

  function menuAnimation() {
    var menuItems =  getMenuItems();
    if(menu.hasClass('act-mobile')) {
      menuAnimationOn(menuItems); 
    } else {
      menuAnimationOff(menuItems);
    }
  };

  function getMenuItems() {    
    var menuItems = [];  
    $('.mobile-menu ul li').each((el, val) => {     
      menuItems.push(val);                
    });
    return menuItems;
  }

  function menuAnimationOn(menuItems) {
    menuItems.forEach((val, index) => {
      $(val).css({"animation": `dreg-out ${0.6 + (0.1*index)}s cubic-bezier(1.000, 0.015, 0.325, 0.985) forwards`});
    });
  }

  function menuAnimationOff(menuItems){
    menuItems.reverse();
    menuItems.forEach((val, index) => {
      $(val).css({"animation": `dreg-in ${0.6 - (0.1*index)}s cubic-bezier(1.000, 0.015, 0.325, 0.985) forwards`});
    });
  }


};

