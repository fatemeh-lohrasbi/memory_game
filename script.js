const cards_array = [
    {
        name:'shape1',
        img : 'images/shape1.png'
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
        name: 'shape7',
        img: 'images/shape7.png'
    },
    {
        name: 'shape8',
        img: 'images/shape8.png'
    },
    {
        name: 'shape9',
        img: 'images/shape9.png'
    },
    {
        name: 'shape10',
        img: 'images/shape10.png'
    },
    {
        name: 'shape11',
        img: 'images/shape11.png'
    },
    {
        name: 'shape12',
        img: 'images/shape12.png'
    }
]
cards_array.sort(() => 0.5 - Math.random() );
console.log(cards_array);

const container = document.querySelector('#grid_container');
const clicked_items_array = [];

function create_board(){
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
    const clicked_item_name = (cards_array[card_id].name);
    clicked_items_array.push(clicked_item_name);
    console.log(clicked_items_array);
    this.setAttribute('src', cards_array[card_id].img);
}
