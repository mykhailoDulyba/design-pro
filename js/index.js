
// $("#home").on('click',  () => {
//     $("#about-card").addClass('action'); 
//     setTimeout(()=>{
//         $("#content").removeClass('action'); 
//     }, 1500);
//     setTimeout(()=>{
//         $("#home-card").css({'left': '0%'}); 
//         $("#about-card").css({'left': '-100%'});
//     }, 3000);    
// });



$("#about").on('click',  () => {
    // $("#content").addClass('action'); 
    // setTimeout(()=>{
    //     $("#content").removeClass('action'); 
    // }, 1500);
    // $("#home-card").css({'left': '-100%'}); 
    // $("#about-card").css({'left': '0%'});  
    $("#contact-card").css({'left': '0%'}); 
    $("#home-card").addClass('head_top '); 
});

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }