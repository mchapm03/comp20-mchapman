function init() {
	var game_board = document.getElementById('game_canvas').getContext('2d');
	var pac_img = new Image();
	pac_img.onload = function() {
		game_board.drawImage(pac_img, 320, 0, 465, 138, 0, 0, 800, 240);
		game_board.drawImage(pac_img, 80, 40, 20, 20, 313, 134, 30, 30);
	}
	pac_img.src = 'pacman10-hp-sprite.png';

}