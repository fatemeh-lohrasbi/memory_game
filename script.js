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
let all_clicked_cards_name = [];
let all_clicked_cards_id = [];
let cards_won = [];

function create_board() {
    for (let i = 0; i < cards_array.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/cover.png');
        card.setAttribute('data-id', i);
        container.appendChild(card);
        card.addEventListener('click', flip_card);
    }
}

create_board();

function flip_card() {
    const card_id = this.getAttribute('data-id');
    const clicked_card_name = (cards_array[card_id].name);
    all_clicked_cards_name.push(clicked_card_name);
    all_clicked_cards_id.push(card_id);
    this.setAttribute('src', cards_array[card_id].img);
    if (all_clicked_cards_name.length == 2) {
        setTimeout(check_match, 200)
    }
}

function check_match() {
    const all_cards = document.querySelectorAll('#grid_container img');
    if (all_clicked_cards_id[0] == all_clicked_cards_id[1]) {
        alert('you have clicked the same image')
        all_cards[all_clicked_cards_id[0]].setAttribute('src', 'images/cover.png');
        all_cards[all_clicked_cards_id[1]].setAttribute('src', 'images/cover.png');

    } else if (all_clicked_cards_name[0] == all_clicked_cards_name[1]) {

        alert(`
         u found a match 👏😍😍
         keep playing to found them all 🙌`)

        all_cards[all_clicked_cards_id[0]].removeEventListener('click', flip_card);
        all_cards[all_clicked_cards_id[1]].removeEventListener('click', flip_card);
        all_cards[all_clicked_cards_id[0]].style.cursor = 'none';
        cards_won.push(all_clicked_cards_name)

    } else {
        all_cards[all_clicked_cards_id[0]].setAttribute('src', 'images/cover.png');
        all_cards[all_clicked_cards_id[1]].setAttribute('src', 'images/cover.png');
    }

    all_clicked_cards_name = [];
    all_clicked_cards_id = [];

    

}

