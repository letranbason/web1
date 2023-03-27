App = {
    sliderPartner: function(){
        jQuery('.partner_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    }
};
jQuery(document).ready(function(){
    App.sliderPartner();
});