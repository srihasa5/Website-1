window.onload = function () 
{
	document.querySelector('.hamburger').addEventListener('click', function (){
		document.querySelector('.hamburger').classList.toggle('press');
		document.querySelector('.menu_view').classList.toggle('press');
	});
}