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
]
cards_array.sort(() => 0.5 - Math.random() );
console.log(cards_array);

