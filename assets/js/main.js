App = {
    sliderPartner: function(){
        jQuery('.partner_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    },
    sliderTable: function(){
        jQuery('.slidertable').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            variableWidth: true
        });
    }
};
jQuery(document).ready(function(){
    App.sliderPartner();
    App.sliderTable();
});