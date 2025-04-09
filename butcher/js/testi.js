$(document).ready(function() {
  
  
  $('#my-carousel').on('initialized.owl.carousel', function() {
$('.navigator').eq(0).addClass('active');
console.log('initialized');
});
  
$('#my-carousel').owlCarousel({
loop : true,
autoplay : true,
autoplayTimeout : 3000,
nav : true,
navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
singleItem: true,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});

$('#my-carousel').on('changed.owl.carousel', function(ev) {
var item_index = ev.page.index;
$('.navigator').removeClass('active').eq(item_index).addClass('active');
});

$('.navigator').on('click', function() {
var item_no = $(this).data('item'); 
$('#my-carousel').trigger('to.owl.carousel', [item_no, 1000, true]);
});
});