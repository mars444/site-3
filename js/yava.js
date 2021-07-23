$(function () {
   $('.pruduct__slider').slick({
    nextArrow: '<button type="button" class="slick_button slick-next"><svg width="10" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>' ,
    prevArrow: '<button type="button" class="slick_button slick-prev"><svg width="10" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>' ,
   infinite: false,
   
       });
       
$('.question__item__title').on('click', function(){
  $('.question__item').removeClass('question__item__active');
   $(this).parent().addClass('question__item__active');
})
        



var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;
$(function(){
    function updateAnchors() {
        anchors = [];
        $('.page_section').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1) 
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 50, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();   
});
});
