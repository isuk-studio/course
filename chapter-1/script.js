$(function () {
  const card = $('.card')

  card.mouseenter(function () {
    const self = $(this);

    self.addClass('card--hovered');
  })

  card.mouseleave(function () {
    const self = $(this);

    self.removeClass('card--hovered');
  })
})