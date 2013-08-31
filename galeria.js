; var indicador = 0;
$(document).on('ready' ,function()
{
	$('.left').on('click' ,function(e)
	{
		e.preventDefault();
		mover('left');
	});
	$('.right').on('click' ,function(e)
	{
		e.preventDefault();
		mover('right');
	});
	porciones();
});
// Este script es lo que hace posible el slide de imagenes
$(window).on('resize' ,porciones);
function porciones()
{
	$('.galeria .slide').each(function(i,el)
	{
		$(el).css({
			'background-image': "url("+$(el).data("background")+")",
			'height': ($('.galeria').width() * 0.65)+'px',
			'width':  ($('.galeria').width())+'px'
		});
	});
	$('.galeria  .imagenes').css({
		'margin-left': -(indicador  *  $('.galeria').width())+'px'
	});
}

function mover(direccion)
{
	var limite = $('.galeria  .slide').length;
	indicador = (direccion == 'right') ? indicador + 1 : indicador - 1;
	indicador = (indicador >= limite) ? 0  : indicador;
	indicador = (indicador < 0) ? limite - 1 : indicador;

	$('.galeria  .imagenes').animate({
		'margin-left': -(indicador  *  $('.galeria').width())+'px'
	});
}