const mongoose = require('mongoose');
const auctionItem = require('./model/auctionItem');
 
async function createAuctionItem() {
    const newItem = await auctionItem.create({
        title: "Bike",
        description: "A good learning bike",
        start_price: 100,
        reserve_price: 150
    }, {
        title: "Cat tree",
        description: "Well loved but still good",
        start_price: 25,
        reserve_price: 50
    }, {
        title: "Queen bed",
        description: "Only 2 years old, doesn't fit into new apartment",
        start_price: 75,
        reserve_price: 150
    }, {
        title: "Dining table",
        description: "No longer needed",
        start_price: 10,
        reserve_price: 40
    },{
        title: "Plastic table",
        description: "No longer needed",
        start_price: 10,
        reserve_price: 15
    }, {
        title: "Kowhai tree",
        description: "Grew too many",
        start_price: 1,
        reserve_price: 5
    }, {
        title: "double bed",
        description: "upsized and don't need anymore",
        start_price: 100,
        reserve_price: 100
    }, {
        title: "Sofa bed",
        description: "Near new, surplus to needs",
        start_price: 70,
        reserve_price: 120
    }, {
        title: "Fridge",
        description: "Mostly works, would make a good beer fridge",
        start_price: 10,
        reserve_price: 50
    }, {
        title: "TV",
        description: "Got a new one, don't need this one",
        start_price: 100,
        reserve_price: 140
    }, {
        title: "Microwave",
        description: "No longer needed",
        start_price: 10,
        reserve_price: 70
    },  );
    // console.log('Auction item saved');
    console.log(newItem);
}

module.exports = createAuctionItem;