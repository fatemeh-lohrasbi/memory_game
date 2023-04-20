const cards_array = [
	{
		name: 'shape1',
		img: 'images/shape1.png'
	},
	{
		name: 'shape2',
		img: 'images/shape2.png'
	},
	{
		name: 'shape3',
		img: 'images/shape3.png'
	},
	{
		name: 'shape4',
		img: 'images/shape4.png'
	},
	{
		name: 'shape5',
		img: 'images/shape5.png'
	},
	{
		name: 'shape6',
		img: 'images/shape6.png'
	},
	{
		name: 'shape1',
		img: 'images/shape7.png'
	},
	{
		name: 'shape2',
		img: 'images/shape8.png'
	},
	{
		name: 'shape3',
		img: 'images/shape9.png'
	},
	{
		name: 'shape4',
		img: 'images/shape10.png'
	},
	{
		name: 'shape5',
		img: 'images/shape11.png'
	},
	{
		name: 'shape6',
		img: 'images/shape12.png'
	}
]
cards_array.sort(() => 0.5 - Math.random());

const container = document.querySelector('#grid_container');
const start_game_btn = document.getElementById('start_game');
const reset_game_btn = document.getElementById('reset_game');
const start_text = document.getElementById('start_text');
const timer_container = document.getElementById('timer');
let win_or_lost_msg = document.getElementById("win_or_lost_msg");
let all_cards = document.querySelectorAll('#grid_container img');


let card = [];
let all_clicked_cards_name = [];
let all_clicked_cards_id = [];
let cards_won = [];
let time_left = 25;
let playing = true;
reset_game_btn.style.display = 'none';


const start_game = function () {
	start_game_btn.style.display = 'none';
	start_text.style.display = 'none';

	// timer
	const count_down = function () {
		time_left--;
		timer_container.innerHTML = time_left + " seconds remaining";

		//if player win
		if (cards_won.length == cards_array.length / 2) {
			win_or_lost_msg.innerHTML = "cogratulation, you found them all 😎👏🎉";
			finish_game();
			//if player lost
		} else if (time_left == 0 && cards_won.length != cards_array.length / 2) {
			win_or_lost_msg.innerHTML = "sorry, you lost 😥";
			finish_game();
			all_cards[all_clicked_cards_id[0]].setAttribute('src', 'images/cover.png');
			all_cards[all_clicked_cards_id[1]].setAttribute('src', 'images/cover.png');
		}
	};
	const countdown_timer = setInterval(count_down, 1000)


	const finish_game = function () {
		clearInterval(countdown_timer);
		timer_container.style.display = 'none';
		reset_game_btn.style.display = 'block';
		reset_game_btn.addEventListener('click', reset);
		playing = false;
	}


	const flip_card = function () {
		if (playing) {
			const card_id = this.getAttribute('data-id');
			const clicked_card_name = (cards_array[card_id].name);
			all_clicked_cards_name.push(clicked_card_name);
			all_clicked_cards_id.push(card_id);
			this.setAttribute('src', cards_array[card_id].img);
			if (all_clicked_cards_name.length == 2) {
				setTimeout(check_match, 300)
			}
		}
	}

	const create_board = function () {
		for (let i = 0; i < cards_array.length; i++) {
			card = document.createElement('img');
			card.setAttribute('src', 'images/cover.png');
			card.setAttribute('data-id', i);
			container.appendChild(card);
			card.addEventListener('click', flip_card);
		}
	}
	create_board();



	const check_match = function() {
		all_cards = document.querySelectorAll('#grid_container img');
		if (all_clicked_cards_id[0] == all_clicked_cards_id[1]) {
			// if you clicked the same card, change image to default cover
			all_cards[all_clicked_cards_id[0]].setAttribute('src', 'images/cover.png');
			all_cards[all_clicked_cards_id[1]].setAttribute('src', 'images/cover.png');

		} else if (all_clicked_cards_name[0] == all_clicked_cards_name[1]) {
			// if you found a match
			all_cards[all_clicked_cards_id[0]].removeEventListener('click', flip_card);
			all_cards[all_clicked_cards_id[1]].removeEventListener('click', flip_card);
			all_cards[all_clicked_cards_id[0]].style.cursor = 'not-allowed';
			all_cards[all_clicked_cards_id[1]].style.cursor = 'not-allowed';
			cards_won.push(all_clicked_cards_name)
		} else {
			all_cards[all_clicked_cards_id[0]].setAttribute('src', 'images/cover.png');
			all_cards[all_clicked_cards_id[1]].setAttribute('src', 'images/cover.png');
		}
		all_clicked_cards_name = [];
		all_clicked_cards_id = [];
	}

	const reset = function() {
		location.reload();
	}
}

document.addEventListener('keydown', start_game);
start_game_btn.addEventListener('click', start_game);
