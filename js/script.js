// Instancier le carroussel
$('.multi-item-carousel').carousel({
  interval: 3000
});

// pour chaque diapositive du carrousel, copiez l'élément de la diapositive suivante dans la diapositive.
// Faites de même pour l'élément suivant.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});