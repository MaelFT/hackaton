$(function () {
  if ($(window).width() > 760) {
    // Instancier le carroussel
    $('.multi-item-carousel').carousel();

    // pour chaque diapositive du carrousel, copiez l'élément de la diapositive suivante dans la diapositive.
    // Faites de même pour l'élément suivant.
    $('.multi-item-carousel .item').each(function () {
      var next = $(this).next();
      // si numéro d'item est différent du dernier item, on cible les frères et soeurs et on met next en premier. 
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      // si le nombre d'items est supérieur à 0, on clone les enfants vers le premier enfant sinon on va chercher le premier enfant que l'on clone
      if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });
  }

  else { }

});