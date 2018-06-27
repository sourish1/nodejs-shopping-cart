var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [

new Product({
    imagePath: 'https://sofy.tv/blog/wp-content/uploads/2017/12/upcoming-hollywood-movies-you-shouldnt-miss-1400x653-1505901970_1100x513.jpg',
    title: 'Justice League',
    description: 'Why so dark?!!',
    price: 150
}),
new Product({
    imagePath: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2Fimage001.jpg',
    title: 'Infinity War',
    description: 'What will happen next?!!',
    price: 350
}),
new Product({
    imagePath: 'https://c1.staticflickr.com/1/807/41043112132_6bf4bc3948_b.jpg',
    title: 'Civil War',
    description: 'Who will win?!!',
    price: 50
}),
new Product({
    imagePath: 'https://i.ytimg.com/vi/98FO19TuI9A/maxresdefault.jpg',
    title: 'Iron Man 3',
    description: 'I am Iron Man',
    price: 150
}),
new Product({
    imagePath: 'https://nerdist.com/wp-content/uploads/2016/10/Doctor-Strange-poster-2016.jpg',
    title: 'Doctor Strange',
    description: 'Dormamu.. i have come to bargain!!',
    price: 150
}),
new Product({
    imagePath: 'https://news.marvel.com/wp-content/uploads/2018/02/mcoc_master-960x540.jpg',
    title: 'Hulk',
    description: 'Do not make him angry',
    price: 25
})

];

var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}