$("#about").on('click',  () => {
    $("#about-card").removeClass('off-card');  
    $("#about-card").addClass('on-card');
});

$("#home").on('click',  () => {
    $("#about-card").addClass('off-card');    
});